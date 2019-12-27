class Library {
  constructor(books, patrons) {
    this.books = [];
    this.patrons = [];
  }

  addPatron(Patron) {
    this.patrons.push(Patron);
  }

  addBook(Book) {
    this.books.push(Book);
  }
}
