function createTitle(title) {
  var newTitle = `The ${title}`;
  return newTitle;
}

function buildMainCharacter(name, age, pronouns){
  return newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
}
var reviews = [];
function saveReview(review, reviewsList){
  //Refactor
  var matchesExist = false;
   if (reviewsList.includes(review)) {
     matchesExist = true;
   }
   if (matchesExist === false) {
     reviewsList.push(review);
   }

  // for (var i = 0; i < array.length; i++) {
  //   if(review === array[i]) {
  //     matchesExist = true;
  //   }
  // }
  // if (matchesExist === false) {
  //   array.push(review);
  // }
  return reviewsList
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, mainCharacter, genre) {

  return book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(anyBook) {
  return anyBook.pageCount = anyBook.pageCount * .75;
}


module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}
