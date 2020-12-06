
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
       shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var titles = [];
  for(i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
   return titles.join(', ');
}


function searchShelf(shelf, title) {
  var onShelf = false;
  for(i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      onShelf = true
    } else {
      onShelf = false;
    }
   }
    if(onShelf === true) {
      return true;
    } else {
      return false;
    }
  }


module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
