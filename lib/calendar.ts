export class Calendar {

}

export type DoW = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export class HDate {
    date: Date = new Date();
    morning: boolean = true;
    afternnon: boolean = true;
}



function DayOfWeek(date: HDate) : DoW {

}

function IsHoliday(date : HDate) : boolean {

}

function IsDayOfWork(date: HDate) : [boolean /*am*/, boolean /*pm*/] {

}