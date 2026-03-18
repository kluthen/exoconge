import { DoW, HDate, DayOfWeek, IsDayOfWork } from "./calendar";
import { Employee } from "./employee";

export class Engine {

}

function CountHalfDays(emp: Employee, begin: HDate, end: HDate): number {
    let count = 0;
    const currentDate = { date: new Date(begin.date), morning: begin.morning, afternoon: begin.afternoon };
    const endDate = end;

    while (currentDate.date <= endDate.date) {
        const dayOfWeek = DayOfWeek({ date: currentDate.date, morning: true, afternoon: true }) as DoW;
        const workSchedule = emp.week[dayOfWeek];
        const [am, pm] = IsDayOfWork(emp,currentDate);
        if(!am && !pm) {
            // pas un jour de travail, on continue !
            // skip dimanche, jour férier et les jours non travaillé par le bonhomme.
            currentDate.date.setDate(currentDate.date.getDate() + 1);
            currentDate.morning = true;
            currentDate.afternoon = true;
            continue;
        }

        // Count morning if it's a work day and the specific half day is marked as work
        if (currentDate.date > begin.date || (currentDate.date.getTime() === begin.date.getTime() && begin.morning)) {
            if (workSchedule.morning) {
                count++;
            }
        }

        // Count afternoon if it's a work day and the specific half day is marked as work
        if (currentDate < endDate || (currentDate.date.getTime() === endDate.date.getTime() && end.afternoon)) {
            if (workSchedule.afternoon) {
                count++;
            }
        }

        currentDate.date.setDate(currentDate.date.getDate() + 1);
        currentDate.morning = true;
        currentDate.afternoon = true;
    }

    return count;
}



function SeekMajored(emp: Employee, begin: HDate, end: HDate): HDate[] {
    const currentDate = { date: new Date(begin.date), morning: begin.morning, afternoon: begin.afternoon };
    const endDate = end;
    let res : HDate[]= []

    while (currentDate.date <= endDate.date) {
        const dayOfWeek = DayOfWeek({ date: currentDate.date, morning: true, afternoon: true }) as DoW;
        const workSchedule = emp.week[dayOfWeek];
        const [am, pm] = IsDayOfWork(emp, currentDate);
        if(!am && !pm) {
            // pas un jour de travail, on continue !
            // skip dimanche, jour férier et les jours non travaillé par le bonhomme.
            currentDate.date.setDate(currentDate.date.getDate() + 1);
            continue;
        } 

        if(workSchedule.majored) {
            res.push(currentDate);
        }

        currentDate.date.setDate(currentDate.date.getDate() + 1);
    }

    return res;
}

export function ComputeNbHolidays(emp: Employee, begin: HDate, end: HDate): [boolean/* OK*/, number /* nb half day consumed*/, Record<DoW, { morning: number; afternoon: number }>/*majored consummed*/]{
    // Phase 1: voler des slips
    // Compter le nombre de demi journée
    let halfDaysCount = CountHalfDays(emp, begin, end);
    

    // virer les dimanches, jour fériers, jour non travaillé par le gus.

    // Décision: Mode majoré ou pas ?
    if(false/*pas majoré*/)
    {
        return [true, halfDaysCount, {
            Monday: { morning: 0, afternoon: 0 },
            Tuesday: { morning: 0, afternoon: 0 },
            Wednesday: { morning: 0, afternoon: 0 },
            Thursday: { morning: 0, afternoon: 0 },
            Friday: { morning: 0, afternoon: 0 },
            Saturday: { morning: 0, afternoon: 0 },
            Sunday: { morning: 0, afternoon: 0 },
        }]
    }


    // Phase 2: ????

    let recap: Record<DoW, { morning: number; afternoon: number }> = {
        Monday: { morning: 0, afternoon: 0 },
        Tuesday: { morning: 0, afternoon: 0 },
        Wednesday: { morning: 0, afternoon: 0 },
        Thursday: { morning: 0, afternoon: 0 },
        Friday: { morning: 0, afternoon: 0 },
        Saturday: { morning: 0, afternoon: 0 },
        Sunday: { morning: 0, afternoon: 0 },
    };

    const majored = SeekMajored(emp, begin,end);
    majored.forEach(element => {
        const dow = DayOfWeek(element);
        const mm = emp.week[dow];
        if( mm.morning && element.morning && emp.majored[dow].morning < 5){
            emp.majored[dow].morning ++;
            recap[dow].morning++;
            halfDaysCount++;
        }
        if( mm.afternoon && element.afternoon && emp.majored[dow].afternoon < 5){
            emp.majored[dow].afternoon ++;
            recap[dow].afternoon++;
            halfDaysCount++;
        }
    });


    // detection des jours majorable
    // pour chaque jour majorable on verifie le décompte déjà majoré
    // on annote le nombre de nouvelle majorations & augmente le calcule de demi journée consommées.
    // Phase 3: Profits!!!
    return [true, halfDaysCount, recap]
}