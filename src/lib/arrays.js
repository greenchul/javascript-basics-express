const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ',') {
      array.push(string[i]);
    }
  }
  return array;
};

const addToArray = (element, array) => {
  array.push(element);
  // no return so should equal undefined
};

const addToArray2 = (element, array) => {
  // let newArr = []
  // for(let i = 0; i<array.length; i++){
  //   newArr.push(array[i])
  // }
  // newArr.push(element)
  // return newArr
  const newArr = array.concat(element);
  return newArr;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  const stringArr = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i].toString();
    stringArr.push(num);
  }
  return stringArr;
};

const uppercaseWordsInArray = strings => {
  const uppercase = [];
  for (let i = 0; i < strings.length; i++) {
    uppercase.push(strings[i].toUpperCase());
  }
  return uppercase;
};

const reverseWordsInArray = strings => {
  const reversed = strings.map(function(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  });
  return reversed;
};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
  });
  return evenNumbers;
};

const removeNthElement2 = (array, index = 0) => {
  const element = array[index];
  const newArr = array.filter(word => {
    return word !== element;
  });
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  const startsWithVowel = strings.filter(string => {
    string = string.toLowerCase();
    return (
      string[0] === 'a' ||
      string[0] === 'e' ||
      string[0] === 'i' ||
      string[0] === 'o' ||
      string[0] === 'u'
    );
  });
  return startsWithVowel;
};

const removeSpaces = string => {
  // convert string to array
  // filter out spaces
  // join array to string & return
  const array = string.split('');
  const noSpaces = array.filter(word => {
    return word !== ' ';
  });
  return noSpaces.join('');
};

const sumNumbers = numbers => {
  const total = numbers.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
};

const sortByLastLetter = strings => {
  const sortedByLastLetter = strings.sort((a, b) => {
    a = a[a.length - 1];
    b = b[b.length - 1];

    if (b > a) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return sortedByLastLetter;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
