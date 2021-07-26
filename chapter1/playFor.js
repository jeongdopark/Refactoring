

import { plays, invoices } from "./variable.js";

export function playFor(aPerformance){
    return plays[aPerformance.playID];
}