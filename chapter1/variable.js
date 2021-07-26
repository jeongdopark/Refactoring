

export {plays, invoices}
// 변수명을 따로 파일로 관리해준다.1

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
