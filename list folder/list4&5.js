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
      customerList.remove(Customer.name);
      
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

MovieList.checkOut("Jane Doe", "City of God");
MovieList.checkOut("Cris Ramirez", "Pulp Fiction");
MovieList.checkOut("More Ramirez", "Schindler’s List");
MovieList.checkOut("Juan Colorado", "The Dark Knight");
MovieList.checkOut("Lenin Ramirez", "Goodfellas");


console.log('\nMovies rented: \n');
MovieList.rentedList.displayList();

console.log("\nCustomer Rentals: \n");
customerList.displayList();

console.log("\n Available movies: \n");
MovieList.displayList();

MovieList.checkIn("Customer { name: 'Juan Colorado', movie: 'The Dark Knight'}","The Dark Knight");
MovieList.checkIn("Customer { name: 'More Ramirez', movie: 'Schindler’s List'}","Schindler’s List")


console.log('\nMovies rented: \n');
MovieList.rentedList.displayList();

console.log("\nCustomer Rentals: \n");
customerList.displayList();

console.log("\n Available movies: \n");
MovieList.displayList();
