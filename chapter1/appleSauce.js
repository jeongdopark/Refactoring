



import { invoices } from "./variable.js";
import { amountFor } from "./amountFor.js";

export function appleSauce(){
    let result = 0;
    for(let perf of invoices.performances){
        result += amountFor(perf);
    }
    return result
}