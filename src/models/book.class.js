export class Book {
    id = '';
    title = '';
    author = '';
    editorial = '';

    constructor(id, title, author, editorial){
        // var nextId = Book[Book.length - 1].id
        var nextId = 1
        this.id = nextId++;
        this.title = title;
        this.author = author;
        this.editorial = editorial;
    }
}