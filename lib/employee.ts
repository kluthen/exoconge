import { DoW } from "./calendar";

export class Employee {
    week: Record<DoW, boolean> = [];
    majored: Record<DoW, number> = [];
    cp_count: number = 25;
}
