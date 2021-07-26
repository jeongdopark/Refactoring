



//amountFor 함수를 추출하여 따로 module화
import { playFor } from "./playFor.js";

export function amountFor(aPerformance){   // 필요 없어진 Play 매개변수 제거

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

