function rot13(str) { // LBH QVQ VG!

    var cipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")

    return str.split("").map( (e) => {
        if(cipher.indexOf(e) >= 0){
            return cipher[cipher.indexOf(e) + 13].toUpperCase()
        } else {
            return e
        }
    }).join("")
}
  
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));;

