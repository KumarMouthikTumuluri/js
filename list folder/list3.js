// Create a Person class that stores a person’s name and their gender.
// Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.

let List = require('../list')

class Person {
  constructor(name, gender) {
    this.name   = name;
    this.gender = gender;
  }
}

class PersonList extends List {

  displayByGender(gender) {
    console.log(`Displaying only people who has the gender: ${gender}`);
    this.dataStore.forEach((person, counter) => {
      if(person.gender === gender){
        console.log(`${counter + 1}.- ${person.name}`);
      }
    });
  }
}

console.log('\n\n### Excercise 3');

const p1  = new Person('Jhon Doe', 'male');
const p2  = new Person('Jane Doe', 'female');
const p3  = new Person('Jose Doe', 'male');
const p4  = new Person('Lady Doe', 'female');
const p5  = new Person('Juan Colorado', 'male');
const p6  = new Person('Maritza Doe', 'female');
const p7  = new Person('Cris Ramirez', 'male');
const p8  = new Person('More Ramirez', 'female');
const p9  = new Person('Lenin Ramirez', 'male');
const p10 = new Person('Jessy Doe', 'female');

const personList = new PersonList();
personList.append(p1);
personList.append(p2);
personList.append(p3);
personList.append(p4);
personList.append(p5);
personList.append(p6);
personList.append(p7);
personList.append(p8);
personList.append(p9);
personList.insertAfter(p10,p3);
personList.displayList();
personList.displayByGender('male');
personList.displayByGender('female');
