class Patron {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
  }

  checkOut(Book) {
    this.currentBook = Book;
    Book.out = true;
    Book.patron = this;
    Book.dueDate = new Date(Date.now() + 12096e5);
  }

  returnBook(Book) {
    this.currentBook = null;
    Book.out = false;
    Book.patron = null;
    Book.dueDate = null;
  }
}
