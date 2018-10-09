// CHECKS IF THE GIVIN STRING IS A PALINDROME OR NOT
// ( STRING === REVERSED-STRING ) 

function palindrome(str) {
    // Remove Spaces and non-alphabetical characters
    var removed = str.replace(/[\s\W_]/gi,"").toLowerCase()
    console.log(removed)
    // Check if its the equalivent of the reversed version  
    return removed == removed.split("").reverse().join("")
  }
  
  
  
console.log(palindrome("A man, _a plan, a canal. Panama"))