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
// Note: Removed the second parameter (4)
const list = new GenericList([1, 4, 5, 7]); 
list.insertGreaterThan(6);  // Failed: 6 is not greater than 7
list.insertGreaterThan(15); // Success: 15 is greater than all
console.log('List 1:', list.toString());

// String list only
const list2 = new GenericList(['a', 'c', 'f', 'g']);
list2.insertGreaterThan('b'); // Failed: 'b' is not greater than 'g'
list2.insertGreaterThan('z'); // Success: 'z' is greater than all
console.log('List 2:', list2.toString());

// Mixed list
const list3 = new GenericList([1, 'c', 2, 'g']);
list3.insertGreaterThan('b'); // Failed: 'b' < 'c' and 'g'
list3.insertGreaterThan('z'); // Success: 'z' > all strings
list3.insertGreaterThan(3);   // Success: 3 > all numbers (1, 2)
list3.insertGreaterThan(0);   // Failed: 0 < 1 and 2
console.log('List 3:', list3.toString());

console.log('\n### Exercise 2');

// Numeric list only
const list4 = new GenericList([1, 4, 5, 7]);
list4.insertSmallerThan(2);  // Failed: 2 is not smaller than 1
list4.insertSmallerThan(0);  // Success: 0 is smaller than all (Corrected from 15)
console.log('List 4:', list4.toString());

// String list only
const list5 = new GenericList(['a', 'c', 'f', 'g']);
list5.insertSmallerThan('0'); // Success: Numbers/Symbols usually come before 'a'
list5.insertSmallerThan('z'); // Failed: 'z' is not smaller than 'a'
console.log('List 5:', list5.toString());

// Mixed list
const list6 = new GenericList([1, 'c', 2, 'g']);
list6.insertSmallerThan('a'); // Success: 'a' is smaller than 'c' and 'g'
list6.insertSmallerThan(0);   // Success: 0 is smaller than 1 and 2
console.log('List 6:', list6.toString());
