import { DoW } from "./calendar";

export type HalfDay = {
    morning: number;
    afternoon: number;
    majored: boolean;
};

export class Employee {
    week: Record<DoW, HalfDay> = {
        Monday: { morning: 1, afternoon: 1 , majored: false },
        Tuesday: { morning: 1, afternoon: 1 , majored: false },
        Wednesday: { morning: 1, afternoon: 1 , majored: false },
        Thursday: { morning: 1, afternoon: 1 , majored: false },
        Friday: { morning: 1, afternoon: 1 , majored: true},
        Saturday: { morning: 0, afternoon: 0 , majored: false },
        Sunday: { morning: 0, afternoon: 0 , majored: false },
    };
    majored: Record<DoW, HalfDay> = {
        Monday: { morning: 0, afternoon: 0, majored: false  },
        Tuesday: { morning: 0, afternoon: 0, majored: false  },
        Wednesday: { morning: 0, afternoon: 0, majored: false  },
        Thursday: { morning: 0, afternoon: 0, majored: false  },
        Friday: { morning: 0, afternoon: 0, majored: true  },
        Saturday: { morning: 0, afternoon: 0, majored: false  },
        Sunday: { morning: 0, afternoon: 0, majored: false  },
    };
    cp_halfday_count: number = 50;
}
