

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning === true) {
    return `Good morning, ${patronName}!`;
  } else {
    return `Hello, ${patronName}!`;
  }
  }

  findBook(title) {
    var onShelf = false;
    if (title === this.library.shelves.fantasy[0].title) {
    onShelf = true;
    }
    if (onShelf === true) {
     this.library.shelves.fantasy.splice(0, 1);
     var response = `Yes, we have ${title}`
    }
    if (onShelf === false) {
      var response = `Sorry, we do not have ${title}`
    }
    return response;
  }
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}



module.exports = Librarian;
