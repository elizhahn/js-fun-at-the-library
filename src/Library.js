function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction:[],
    },
  }
  return library;
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    //refactor
    return library.shelves.fantasy.push(book);
  //return library.shelves.fantasy[0] = book;
} else if (book.genre === "fiction") {
  //refactor
    return library.shelves.fiction.push(book);
  //return library.shelves.fiction[0] = book;
} else {
  //refactor
    return library.shelves.nonFiction.push(book);
  //return library.shelves.nonFiction[0] = book;
}
}

 function checkoutBook(library, title, genre) {
   var bookShelf = library.shelves[genre];
   for (i = 0; i < bookShelf.length; i++) {
     if (bookShelf[i].title === title) {
        bookShelf.splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }





module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
