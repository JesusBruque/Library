export class Book {
    id = '';
    title = '';
    author = '';
    editorial = '';

    static count = 4;

    constructor(id, title, author, editorial){
        this.id = this.constructor.count++;
        this.title = title;
        this.author = author;
        this.editorial = editorial;
    }
}