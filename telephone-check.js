function telephoneCheck(str) {
    // Good luck!
    return /(^([1]\s?)?((\d\d\d)|([(]\d\d\d[)]))[\s-]?\d\d\d[-\s]?\d\d\d\d$)/gm.test(str)
  }
  
telephoneCheck("555-555-5555");