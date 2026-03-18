import { DoW } from "./calendar";

export class Engine {

}

export function ComputeNbHolidays(emp: Employee, begin :Date, end: Date): [boolean/* OK*/, number /* nb half day consumed*/, DoW[]/*majored consummed*/]{
    // Phase 1: voler des slips
    // Compter le nombre de demi journée
    // virer les dimanches, jour fériers, jour non travaillé par le gus.

    // Décision: Mode majoré ou pas ?
    if(true/*pas majoré*/)
    {
        return [true, 0, []]
    }


    // Phase 2: ????



    // detection des jours majorable
    // pour chaque jour majorable on verifie le décompte déjà majoré
    // on annote le nombre de nouvelle majorations & augmente le calcule de demi journée consommées.
    // Phase 3: Profits!!!
    return [true, 0, []]
}