
const plays = {
    hamlet : {
        name : "hamlet" ,
        type : "tragedy"
    },
    asLike : {
        name : "As you like it",
        type : "comedy"
    },
    othello : {
        name : "Othello",
        type : "tragedy"
    }
}

const invoices = 
    {
        customer : "BigCo",
        performances : [
            {
                playID : "hamlet",
                audience : 55
            },
            {
                playID : "asLike",
                audience : 35
            },
            {
                playID : "othello",
                audience : 40
            }
        ]
    }



function statement(invoices, plays){
    let totalAmount = 0;
    let volumeCredit = 0;
    let result = `청구 내력 (고객명 : ${invoices.customer})\n`;
    const format = new Intl.NumberFormat("en-US",
                    {style : "currency", currency: "USD",
                    minimumFractionDigits : 2}).format;

    for(let i in invoices.performances){
        const play = plays[i.playID]
        let thisAmount = 0;

        switch(play.type){
            case "tragedy":
                thisAmount += 40000;
                if(i.audience > 30){
                    thisAmount += 1000 * (i.audience * - 30)
                }
                break;
            case "comedy":
                thisAmount += 30000;
                if(i.audience > 20){
                    thisAmount += 10000 + 500 * (i.audience - 20)
                }
                break;
            default:
                throw new Error (`알 수 없는 장르 : ${play.type}`);
        }

        

    }
}


