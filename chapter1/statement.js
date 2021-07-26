

import {invoices, plays} from './variable.js'
import {amountFor} from './amountFor.js'
import {playFor} from './playFor.js'
import {volumeCreditCalculate} from './volumeCreditCalculate.js'
import {usd} from './format.js'
import { totalVolumeCredit } from './totalVolumeCredit.js'
import { appleSauce } from './appleSauce.js'



function statement(invoices, plays){
    
    let result = `청구 내역 (고객명 : ${invoices.customer})\n`;
    
    for(let perf of invoices.performances){
        result += ` ${playFor(perf).name} : ${usd (amountFor(perf)/100)} (${perf.audience}석\n)`;
        
    }
    
    result += `총액 : ${usd(appleSauce() / 100)}\n`;
    result += `적립 포인트 : ${totalVolumeCredit(invoices)}점\n`;
    return result;
}


console.log(statement(invoices, plays));
