export class BookModel {
    title?: string;
    author?: string;
    subtitle?: string;
    subject?: string;
    description?: string;
    publishedDate?: string;
    constructor(book?: BookModel){
        if(book){
            this.title = book.title;
            this.author = book.author;
            this.subtitle = book.subtitle;
            this.subject = book.subject;
            this.description = book.description            
            this.publishedDate = book.publishedDate
        }
    }
}