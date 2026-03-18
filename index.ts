import { Employee } from './lib/employee';
import { HDate } from './lib/calendar';
import { ComputeNbHolidays } from './lib/engine';

/**
 * entité employé
 *
 *  [ "day1" => ["morning" => true , "afternoon" => "true"] , "day2" => ... ]
 *
 *
 * step 1; calculer le nombre de demi journée entre début et fin des congés, puis enlever les dimanches samedi
 *
 * step 2; gestion des majorables, on regarde le planning, les interruptions, a chaque interruptions, opportunité majorable
 * step 3; détéction des cas majorables;
 *     vendredi
 *     dimanche
 *     mercredi
 *
 * bien vérifier congé dispo > congé pris
 * 30 mai premier janvier compteur de majoration réinitalisé, donc on autorise tout les congés tout le temps, on veut juste savoir combien ça va compter.
 * combien ça coute en jours de congés,
 *	majoration au 30 mai.
 * 		donc imaginanons qu'il prenne du 27 au 25 mai donc ct déjà marjoré,
 * on regarde le décompte déjà marjoré dans le temps
 *   majoration
 *
 * return bool congéValide + nombre de jour congé pris et nombre de jour congé restant
 */

// Example TypeScript file
const greeting: string = "Hello, TypeScript!";
console.log(greeting);

const emp = new Employee();

// Test cases with various date ranges
const testCases = [
  { days: 3, label: "3 days" },
  { days: 5, label: "5 days" },
  { days: 10, label: "10 days" },
  { days: 20, label: "20 days" },
];

testCases.forEach(testCase => {
  const begin = new HDate();
  const end = new HDate();
  
  begin.date = new Date(2026, 3, 1); // April 1, 2026
  begin.morning = true;
  begin.afternoon = true;
  
  end.date = new Date(2026, 3, 1 + testCase.days - 1); // Calculate end date
  end.morning = true;
  end.afternoon = true;
  
  const [ok, halfDays, majoredDays] = ComputeNbHolidays(emp, begin, end);
  
  console.log(`\n${testCase.label}:`);
  console.log(`  From: ${begin.date.toDateString()}`);
  console.log(`  To: ${end.date.toDateString()}`);
  console.log(`  Valid: ${ok}`);
  console.log(`  Half days consumed: ${halfDays}`);
  
  // Count total majorations
  let totalMajored = 0;
  for (const day of Object.keys(majoredDays)) {
    const dayData = majoredDays[day as any as keyof typeof majoredDays];
    totalMajored += dayData.morning + dayData.afternoon;
  }
  console.log(`  Total majorations: ${totalMajored}`);
});
