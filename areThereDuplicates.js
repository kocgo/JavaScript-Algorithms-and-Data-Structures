const areThereDuplicates = (...args) => {
    let instances = {}

    for(let i=0; i< args.length; i++){

        instances[args[i]] = (instances[args[i]] || 0 ) + 1
        
        if(instances[args[i]] > 1){
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates("a","b","c","a"))
