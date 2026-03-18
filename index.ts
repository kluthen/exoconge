import { Employee } from './lib/employee';
import { Calendar } from './lib/calendar';
import { Engine } from './lib/engine';

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
