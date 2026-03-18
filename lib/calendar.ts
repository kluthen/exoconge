import { Employee } from "./employee";

export type DoW = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export class HDate {
    date: Date = new Date();
    morning: boolean = true;
    afternoon: boolean = true;
}



export function DayOfWeek(date: HDate) : DoW {
    const days: DoW[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.date.getDay()] as DoW;
}

export function IsHoliday(date : HDate) : boolean {
    return false;
}

export function IsDayOfWork(emp: Employee, date: HDate) : [boolean /*am*/, boolean /*pm*/, ] {
    let dow = DayOfWeek(date);
    if(IsHoliday(date)) return [false, false];
    return [emp.week[dow].morning == 1, emp.week[dow].afternoon == 1];
}