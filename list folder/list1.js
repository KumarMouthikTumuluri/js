//Write a function that inserts an element into a list only if the element to be inserted
//is larger than any of the elements currently in the list. Larger can mean either greater
//than when working with numeric values, or further down in the alphabet, when
//working with textual values.


let List = require('../list')
List.prototype.insertLarge= function insertIfLarge(element){
   const sameType = this.dataStore.filter(a=>typeof(a)===typeof(element));
   if(sameType.length==0|| sameType.every(a=>element>a)){
    this.append(element);
   }
}

List.prototype.insertLarge = function (element) {
  switch (typeof element) {

    case "string":
    case "number": {
      const sameType = this.dataStore.filter(
        a => typeof a === typeof element
      );

      if (sameType.length === 0 || sameType.every(a => element > a)) {
        this.append(element);
      }
      break;
    }

    default:
      throw new Error('wrong datatype');
  }
};


var names = new List();
names.add('Barbara','Cynthia','Sylvester','Slice');
names.print();
names.insertLarge('Adolf');
names.insertLarge('Xenophon');
names.print();

let numbers = new List();
numbers.add(12,10,9,7,'t');
numbers.print();
numbers.insertLarge(1000);
numbers.print();

##########################################################################################################################
import { List } from './List.js';

class GenericList extends List {
  constructor(dataStore = []) {
    super(dataStore); 
  }

  insertGreaterThan(element) {
    const sameType = this.dataStore.filter(item => typeof item === typeof element);
    // Logic: check if list is empty of that type OR element is greater than all existing items
    if (sameType.length === 0 || sameType.every(a => element > a)) {
      this.append(element);
      console.log(`Success: ${element} is greater than similar items.`);
    } else {
      console.log(`Failed: ${element} is not greater than all similar items.`);
    }
  }

  insertSmallerThan(element) {
    const sameType = this.dataStore.filter(item => typeof item === typeof element);
    // FIX: Change 'element > a' to 'element < a'
    if (sameType.length === 0 || sameType.every(a => element < a)) {
      this.append(element);
      console.log(`Success: ${element} is smaller than similar items.`);
    } else {
      console.log(`Failed: ${element} is not smaller than all similar items.`);
    }
  }
}

// Implementations
// ###################################
/*
1.- Write a function that inserts an element into a list only if the element to be inserted
    is larger than any of the elements currently in the list. Larger can mean either greater
    than when working with numeric values, or further down in the alphabet, when working with textual values.
*/
console.log('CHAPTER 3');
console.log('### Excercise 1');

// Numeric list only
const list = new GenericList([1,4,5,7], 4);
list.insertGraterThan(6);
list.insertGraterThan(15);
console.log(list.toString());

// string list only
const list2 = new GenericList(['a','c','f','g'], 4);
list2.insertGraterThan('b');
list2.insertGraterThan('z');
console.log(list2.toString());

// mixed list
const list3 = new GenericList([1,'c',2,'g'], 4);
list3.insertGraterThan('b');
list3.insertGraterThan('z');
list3.insertGraterThan(3);
list3.insertGraterThan(0);
console.log(list3.toString());

// ###################################
/*
2.- Write a function that inserts an element into a list only if the element to be inserted
    is smaller than any of the elements currently in the list.
*/
console.log('\n\n### Excercise 2');

// Numeric list only
const list4 = new GenericList([1,4,5,7], 4);
list4.insertSmallerThan(2);
list4.insertSmallerThan(15);
console.log(list4.toString());

// string list only
const list5 = new GenericList(['a','c','f','g'], 4);
list5.insertSmallerThan('b');
list5.insertSmallerThan('z');
console.log(list5.toString());

// mixed list
const list6 = new GenericList([1,'c',2,'g'], 4);
list6.insertSmallerThan('b');
list6.insertSmallerThan('z');
list6.insertSmallerThan(3);
list6.insertSmallerThan(0);
console.log(list6.toString());

