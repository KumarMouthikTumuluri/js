// Class People for Excercise 4
// ###################################

class Customer{
 constructor(name = 'Juan Colorado', movie = 'Monarcas Morelia Movie') {
    this.name  = name;
    this.movie = movie;
  }
}

class MovieStore extends List {
   constructor(rentedList = new List()) {
    super();
    this.rentedList = rentedList;
  }
  
  checkOut(name, movie, customerList) {
    if(this.contains(movie)) {
       const c = new Customer(name, movie);
       customerList.append(c);
       this.remove(movie);
       this.rentedList.append(movie);
       console.log('\nMovies rented: ');
       this.rentedList.displayList();
    } else {
      console.log(`\n${movie} is not available to rent or is already rented`);
    }
  }
  checkIn(movie, customer, customerList) {
    if(this.rentedList.contains(movie)) {
      this.rentedList.remove(movie);
      this.append(movie);
      // customerList.remove(customer.name);
    }
  }
  

}
