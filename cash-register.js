function checkCashRegister(price, cash, cid) {
    var word = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"]
    var amount = [0.01,0.05,0.1,0.25,1,5,10,20,100];
    var result = [];
    var difference = parseFloat((cash - price).toFixed(2));
    var differ = parseFloat(cash-price).toFixed(2)
    console.log(differ)
    var cashTotal = 0
    for(var i=0; i<9; i++){
        cashTotal += parseFloat(cid[i][1])
    }
    cashTotal = cashTotal.toFixed(2)
    var change = []
    var resultObject = {}
    var resultArray = []
    
    for(var i=cid.length - 1; i>=0; i--){
        while(differ >= amount[i] && cid[i][1] > 0){
            
            console.log(amount[i])
            console.log(differ)
            console.log(parseFloat(differ - amount[i]).toFixed(2))
            differ = parseFloat(differ - amount[i]).toFixed(2)
            result.push(amount[i])
            cid[i][1] -= amount[i]
            change.push(amount[i])
        }
    }
 
    change.forEach( e => {
        if(!(word[amount.indexOf(e)] in resultObject)){
            resultObject[word[amount.indexOf(e)]] = e
        } else {
            resultObject[word[amount.indexOf(e)]] += e
        }
    })

    var resultTotal = 0.0000
    for(var i in resultObject){
        resultArray.push( [i, parseFloat(resultObject[i].toFixed(2)) ]  )
        var add = parseFloat(resultObject[i].toFixed(2))
        resultTotal += add
    }
    resultTotal = resultTotal.toFixed(4)

    console.log(difference)
    console.log(resultTotal)
    console.log(cashTotal)
    console.log(resultArray)
    if (difference > resultTotal){
        return  {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (cashTotal - resultTotal == 0){
        var lastType = resultArray[resultArray.length - 1][0]
        console.log(lastType)
        var distance = word.indexOf(lastType)

        for(var i=distance +1; i< word.length; i++){
            console.log(i)
            resultArray.push([word[i],0])
        }
        console.log(distance)
        console.log(resultArray)

        return  {status: "CLOSED", change: resultArray}
    } else if (cashTotal - resultTotal > 0){
        return {status: "OPEN", change: resultArray}
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])