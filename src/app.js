/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
// const { request, response } = require('express');
const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();
app.use(express.json());

app.get('/strings/hello/:name', (req, res) => {
  const { name } = req.params;
  const result = sayHello(name);
  res.json({ result: `${result}` });
  res.sendStatus(200);
});

app.get('/strings/upper/:word', (req, res) => {
  const { word } = req.params;
  const result = uppercase(word);
  res.json({ result: `${result}` });
  res.sendStatus(200);
});

app.get('/strings/lower/:word', (req, res) => {
  const { word } = req.params;
  const result = lowercase(word);
  res.json({ result: `${result}` });
  res.sendStatus(200);
});

app.get('/strings/first-characters/:word', (req, res) => {
  const { word } = req.params;
  const { length } = req.query;
  const result = firstCharacters(word, length);
  res.json({ result: `${result}` });
  res.sendStatus(200);
});

app.get('/numbers/add/:one/and/:two', (req, res) => {
  const one = parseInt(req.params.one);
  const two = parseInt(req.params.two);
  // eslint-disable-next-line prettier/prettier
  if(Number.isNaN(one) || Number.isNaN(two) ){
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: add(parseInt(one), parseInt(two)) });
    res.status(200);
  }
});

app.get('/numbers/subtract/:one/from/:two', (req, res) => {
  const one = parseInt(req.params.one);
  const two = parseInt(req.params.two);
  if (Number.isNaN(one) || Number.isNaN(two)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(two, one) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  const value = req.body.value;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const value = req.body.value;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = req.params.number;
  if (Number.isNaN(parseInt(number))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(number) });
});

app.get('/booleans/:word/starts-with/:char', (req, res) => {
  const word = req.params.word;
  const char = req.params.char;
  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(char, word) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const index = req.params.index;
  const arr = req.body.array;
  res.status(200).json({ result: getNthElement(index, arr) });
});

app.post('/arrays/to-string', (req, res) => {
  const arr = req.body.array;
  res.status(200).json({ result: arrayToCSVString(arr) });
});

app.post('/arrays/append', (req, res) => {
  const arr = req.body.array;
  const element = req.body.value;
  res.status(200).json({ result: addToArray2(element, arr) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const arr = req.body.array;
  res.status(200).json({ result: elementsStartingWithAVowel(arr) });
});

app.post('/arrays/remove-element', (req, res) => {
  const arr = req.body.array;
  const index = req.query.index;
  res.status(200).json({ result: removeNthElement2(arr, index) });
});
module.exports = app;
