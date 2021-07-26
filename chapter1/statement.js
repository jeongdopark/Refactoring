

import {invoices, plays} from './variable.js'


function statement(invoices, plays){
    let totalAmount = 0;
    let volumeCredit = 0;
    let result = `청구 내역 (고객명 : ${invoices.customer})\n`;
    const format = new Intl.NumberFormat("en-US",
                            {style : "currency", currency: "USD",
                        minimumFractionDigits : 2}).format;
    
    for(let perf of invoices.performances){
        const play = plays[perf.playID];
        let thisAmount = amountFor(perf, play);
        function amountFor(perf, play){
            let thisAmount = 0;

            switch(play.type){
                case "tragedy":
                    thisAmount = 40000;
                    if(perf.audience > 30){
                        thisAmount += 1000 * (perf.audience - 30);
                    }
                    break;
                case "comedy":
                    thisAmount = 30000;
                    if(perf.audience > 20){
                        thisAmount += 10000 + 500 * (perf.audience - 20);
                    }
                    thisAmount += 300 * perf.audience;
                    break;
                default:
                    throw new Error(`알 수 없는 장르 : ${play.type}`);
            }
            return thisAmount;
        }
        volumeCredit += Math.max(perf.audience - 30, 0);

        if("comedy" === play.type) volumeCredit += Math.floor(perf.audience / 5);

        result += ` ${play.name} : ${format(thisAmount/100)} (${perf.audience}석\n)`;
        totalAmount += thisAmount;
    }
    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredit}점\n`;
    return result;
}

console.log(statement(invoices, plays));
