


import { volumeCreditCalculate } from "./volumeCreditCalculate.js";
import { invoices } from "./variable.js";
export function totalVolumeCredit(){
    let result = 0;

    for(let perf of invoices.performances){
    result += volumeCreditCalculate(perf)
    }
    return result
}