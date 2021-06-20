import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookModel } from 'src/app/shared/models/book.model';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WishlistComponent implements OnInit {

  cols: any[];
  selectedBooks: BookModel[] = [];

  constructor(public bookService: BookService) { }
  
  ngOnInit(): void {
  }
  
  removeBook(book) {
    const currentBooks = [...this.bookService.wishListBooks]
    const findBookInArray = currentBooks.find(b=>b.title === book.title && b.publishedDate === book.publishedDate && b.subtitle === book.subtitle)
    if(findBookInArray){
      const index = this.bookService.wishListBooks.indexOf(findBookInArray)      
      this.bookService.wishListBooks.splice(index, 1)
    }
  }
}
