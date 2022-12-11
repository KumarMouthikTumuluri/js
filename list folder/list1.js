//Write a function that inserts an element into a list only if the element to be inserted
//is larger than any of the elements currently in the list. Larger can mean either greater
//than when working with numeric values, or further down in the alphabet, when
//working with textual values.


let List = require('../list')
List.prototype.insertLarge = function insertIfLarger(element){
switch (typeof(element)){
  case "string" :
    if(this.dataStore.filter(a=>a>element) == 0){this.add(element)}
    break;
  case "number" :
    if(Math.max.apply(null,this.dataStore.filter(a=>typeof(a)=='number'))<element){this.add(element)} //Math.max(...this.dataStore.filter(a=>typeof(a)=='number'))<element;
    break;
    
  default:
    throw new Error('wrong datatype');
    break;
 }
}


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
class GenericList extends List {
  constructor(dataStore, listSize) {
    super(dataStore, listSize);
  }

  insertGraterThan(element) {
    let grater = false;
    let value  = 0;
    for (const key in this.dataStore) {
      if( typeof element !== 'string' && typeof this.dataStore[key] === 'string' ||
          typeof element === 'string' && typeof this.dataStore[key] !== 'string' ) {
        continue;
      }
      value  = (typeof element === 'string') ? this.dataStore[key] + '' : this.dataStore[key];
      greater = (element > value) ? true : false;
    }
    if(greater) {
      this.dataStore.push(element);
      console.log(`The element: ${element} is grater than elemnt's in the list`);
    } else {
      console.log(`The element: ${element} is not grater than elemnt's in the list`);
    }
  }

  insertSmallerThan(element) {
    let smaller = false;
    let value   = 0;
    for (const key in this.dataStore) {
      if( typeof element !== 'string' && typeof this.dataStore[key] === 'string' ||
          typeof element === 'string' && typeof this.dataStore[key] !== 'string' ) {
        continue;
      }
      value  = (typeof element === 'string') ? this.dataStore[key] + '' : this.dataStore[key];
      smaller = (element < value) ? true : false;
    }
    if(smaller) {
      this.dataStore.push(element);
      console.log(`The element: ${element} is smaller than elemnt's in the list`);
    } else {
      console.log(`The element: ${element} is not smaller than elemnt's in the list`);
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

