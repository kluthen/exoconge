export class Calendar {

}

export type DoW = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export class HDate {
    date: Date = new Date();
    morning: boolean = true;
    afternnon: boolean = true;
}



function DayOfWeek(date: Date) : Dow {

}

function IsHoliday(date : Date) : boolean {

}

function IsDayOfWork(date: Date) : [boolean /*am*/, boolean /*pm*/] {

}