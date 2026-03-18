import fs from "node:fs";
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

function IsHoliday(date: Date): boolean {
	const holidays = fs.readFileSync(__dirname + "/holidays.json");
	return holidays.includes(date.toISOString().substring(0, 10));
}

export function IsDayOfWork(emp: Employee, date: HDate) : [boolean /*am*/, boolean /*pm*/, ] {
    let dow = DayOfWeek(date);
    if(IsHoliday(date.date)) return [false, false];
    return [emp.week[dow].morning == 1, emp.week[dow].afternoon == 1];
}
