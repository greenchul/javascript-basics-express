const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  }
  return person
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property]
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true
  }
  else{
    return false
  }
};

const isOver65 = person => {
  return person.age > 65 ? true : false
};

const getAges = people => {
  const ages = []
  for (let i =0; i <people.length; i++){
    ages.push(people[i].age)
  }
  return ages
};

const findByName = (name, people) => {
  for (let i =0; i< people.length; i++){
    if(people[i].name === name){
      return people[i]
    }
  }
};

const findHondas = cars => {
  let listOfHondas = []
  for(let i =0; i<cars.length; i++){
    if(cars[i].manufacturer === "Honda"){
      listOfHondas.push(cars[i])
    }
  }
  return listOfHondas
};

const averageAge = people => {
  let sumOfAges = 0;
  for(let i=0; i<people.length; i++){
    sumOfAges = sumOfAges + people[i].age
  }
  let len = people.length
  return sumOfAges/len
};

const createTalkingPerson = (name, age) => {
  const bill ={
    name: name,
    age: age,
    introduce: function(friend){
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
    }

  }
  return bill
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
