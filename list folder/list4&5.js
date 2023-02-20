// Class People for Excercise 4
// ###################################

import { List } from './list.js';
import fs from 'fs';

function createArr(file) {
  // const { readFileSync } = require('./fs');
  const arr = fs.readFileSync(file).toString().replace(/\r\n/g, '\n').split('\n');
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].trim();
  }
  return arr;
}


let customerList = new List();

class Customer {
  constructor(name = 'Juan Colorado', movie = 'Monarcas Morelia Movie') {
    this.name = name;
    this.movie = movie;
  }
}

class movieList extends List {
  constructor(rentedList = new List()) {
    super();
    this.rentedList = rentedList;
  }


  checkOut(name, movie) {
    if (this.contains(movie)) {
      var c = new Customer(name, movie);
      customerList.add(c);
      this.remove(movie);
      this.rentedList.add(movie);

      //this.rentedList.displayList();
    }
    else {
      console.log(`\n${movie} is not available to rent or is already rented`);
    }
  }

  
  checkIn(Customer,movie) {
    if(this.rentedList.contains(movie)) {
      this.rentedList.remove(movie);
      this.add(movie);
      customerList.remove(Customer);
    }
  }
}



let movies = createArr("films.txt");

let MovieList = new movieList();
for (var i = 0; i < movies.length; ++i) {
  MovieList.add(movies[i]);
}
console.log("Available movies: \n");
MovieList.displayList();

console.log("\n\n\nCheck-out\n\n\n");

MovieList.checkOut("Jane Doe", "City of God");
MovieList.checkOut("Cris Ramirez", "Pulp Fiction");
MovieList.checkOut("More Ramirez", "Schindler’s List");
MovieList.checkOut("Juan Colorado", "The Dark Knight");
MovieList.checkOut("Lenin Ramirez", "Goodfellas");


console.log('\nMovies rented After CheckOut: \n');
MovieList.rentedList.displayList();

console.log("\nCustomer Rentals After CheckOut: \n");
customerList.displayList();

console.log("\n Available movies After CheckOut: \n");
MovieList.displayList();




console.log("\n\n\nCheck-IN\n\n\n");
let c= customerList.dataStore;
let movie1="The Dark Knight";
let movie2="Schindler’s List";
MovieList.checkIn(c[c.findIndex(x=>x.movie=== movie1)],movie1);
MovieList.checkIn(c[c.findIndex(x=>x.movie=== movie2)],movie2);


console.log('\nMovies rented After CheckIn: \n');
MovieList.rentedList.displayList();

console.log("\nCustomer Rentals After CheckIn: \n");
customerList.displayList();

console.log("\n Available movies After CheckIn: \n");
MovieList.displayList();






