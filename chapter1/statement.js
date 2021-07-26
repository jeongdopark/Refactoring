

import {invoices, plays} from './variable.js'


function statement(invoices, plays){
    let totalAmount = 0;
    let volumeCredit = 0;
    let result = `청구 내역 (고객명 : ${invoices.customer})\n`;
    const format = new Intl.NumberFormat("en-US",
                            {style : "currency", currency: "USD",
                        minimumFractionDigits : 2}).format;
    
    for(let perf of invoices.performances){
        // const play = playFor(perf); --> playFor(perf) 인라인된 변수는 제거 ! 
        
        // let thisAmount = amountFor(perf, playFor(perf)); //필요없는 매개변수 제거
        let thisAmount = amountFor(perf);

        volumeCredit += Math.max(perf.audience - 30, 0);

        if("comedy" === playFor(perf).type) volumeCredit += Math.floor(perf.audience / 5);

        result += ` ${playFor(perf).name} : ${format(thisAmount/100)} (${perf.audience}석\n)`;
        totalAmount += thisAmount;
    }
    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredit}점\n`;
    return result;
}


function playFor(aPerformance){
    return plays[aPerformance.playID];
}

function amountFor(aPerformance){   // 필요 없어진 Play 매개변수 제거

    let result = 0;     // 함수에서 return하게 될 값을 result 변수로 지정

    switch(playFor(aPerformance).type){
        case "tragedy":
            result = 40000;
            if(aPerformance.audience > 30){
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if(aPerformance.audience > 20){
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type.type}`);
    }
    return result;
}

console.log(statement(invoices, plays));
