

import {invoices, plays} from './variable.js'
import {amountFor} from './amountFor.js'
import {playFor} from './playFor.js'
import {volumeCreditCalculate} from './volumeCreditCalculate.js'
import {format} from './format.js'
function statement(invoices, plays){
    let totalAmount = 0;
    let volumeCredit = 0;
    let result = `청구 내역 (고객명 : ${invoices.customer})\n`;
    
    
    for(let perf of invoices.performances){
        volumeCredit += volumeCreditCalculate(perf)

        result += ` ${playFor(perf).name} : ${format(amountFor(perf)/100)} (${perf.audience}석\n)`;
        totalAmount += amountFor(perf);
    }

    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredit}점\n`;
    return result;
}



console.log(statement(invoices, plays));
