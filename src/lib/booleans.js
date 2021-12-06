function negate(a) {
  return !a;
}

function both(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

function either(a, b) {
  if (a || b) {
    return true;
  } else {
    return false;
  }
}

function none(a, b) {
  if (!a && !b) {
    return true;
  } else {
    return false;
  }
}

function one(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  } else {
    return false;
  }
}

function truthiness(a) {
  if (a) {
    return true;
  } else {
    return false;
  }
}

function isEqual(a, b) {
  // if (a === b){
  //   return true
  // }
  // else{
  //   return false
  // }
  return a === b ? true : false;
}

function isGreaterThan(a, b) {
  return a > b ? true : false;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b ? true : false;
}

function isOdd(a) {
  // if(a%2 > 0){
  //   return true
  // }
  // else{
  //   return false
  // }
  return a % 2 > 0 ? true : false;
}

function isEven(a) {
  return a % 2 === 0 ? true : false;
}

function isSquare(a) {
  let squareRoot = Math.sqrt(a);
  return squareRoot ** 2 === a ? true : false;
}

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  } else {
    return false;
  }
}

function containsVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  string = string.toLowerCase();
  // loop through each vowel and check if it is in the string
  // if so return true
  // once every letter has been checked return false if no vowel
  for (let i = 0; i < vowels.length; i++) {
    if (string.indexOf(vowels[i]) >= 0) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  let lowerCaseString = string.toLowerCase();
  return lowerCaseString === string ? true : false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
