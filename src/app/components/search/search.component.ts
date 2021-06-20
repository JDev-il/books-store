import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookModel } from 'src/app/shared/models/book.model';
import { VolumeModel } from 'src/app/shared/models/volume.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class SearchComponent implements OnInit {

  @BlockUI() loader: NgBlockUI;

  books = [];
  display: boolean = false;
  areBooks: boolean = true;

  contentStyle = {
    overflow: 'auto',
    height: '75vh',
    width: '75vw',
    display: 'flex',
    flexFlow: 'column',
    padding: '0px 35px',
    margin: '0',
  };


  constructor(public bookService: BookService, public dialogService: DialogService) {
  }

  
  ngOnInit(): void {
  }

  async bookQuery(value: string) {      
    if(value.length){
      await this.bookService.getBooksApi(value)
      .then(()=>{
        this.bookService.loading$.subscribe(async(load: boolean)=>{          
            if(load){
              this.loader.start('Loading...');
              this.areBooks = false;
              this.books = this.bookService.receivedBooks
            } else {
              this.loader.stop();          
            }
        })
      }).catch((err=>err))
    } else {
      this.books = []
      this.areBooks = true;
    }
  }


  showDialog(book){
    this.bookService.dialogBook = book;
    this.display = true;
  }
  
  addToWishlist(){
    if(this.bookService.wishListBooks.length){
      const findBookInArray = this.bookService.wishListBooks.find(b=>b.title === this.bookService.dialogBook.title && b.publishedDate === this.bookService.dialogBook.publishedDate && b.subtitle === this.bookService.dialogBook.subtitle)
      if(!findBookInArray){
        this.bookService.wishListBooks = [...this.bookService.wishListBooks, this.bookService.dialogBook]
      }
    } else {
      this.bookService.wishListBooks = [...this.bookService.wishListBooks, this.bookService.dialogBook]
    }
  }
  
  

  ngOnDestroy(): void {
  }

}
