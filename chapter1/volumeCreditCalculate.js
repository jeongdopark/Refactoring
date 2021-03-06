

import { playFor } from "./playFor.js";


export function volumeCreditCalculate(aPerformance){
    let result = 0
    
    result += Math.max(aPerformance.audience - 30, 0);

    if("comedy" === playFor(aPerformance).type){
        result += Math.floor(aPerformance.audience / 5);
    } 
    return result
}