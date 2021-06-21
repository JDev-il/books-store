/*=====  Initial Imports  ======*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*=====  Models & Interfaces =====*/
import { BookModel } from '../shared/models/book.model';
import { VolumeModel } from '../shared/models/volume.model';
export interface User {username: string, password: string}


/*=====  RxJS =====*/
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  searchQuery: Subject<string> = new Subject()
  receivedBooks: BookModel[] = []
  booksContainer: VolumeModel[] = []
  
  dialogBook: BookModel; 
  wishListBooks: BookModel[] = [];

  constructor(private httpApi: HttpClient){}

  private get BookRoutes() {
    return {
      booksApi: 'https://www.googleapis.com/books/v1/volumes?q=:search&orderBy=newest',
    };
  }


  private LoadingSource = new Subject<boolean>();  
  private BooksSource = new BehaviorSubject<VolumeModel[]>([]);
  
  readonly loading$ = this.LoadingSource.asObservable();
  readonly booksSource$ = this.BooksSource.asObservable();
  readonly searchQuery$ = this.searchQuery.asObservable()

  async getBooksApi(value: string) {
    this.searchQuery.next(value);
    this.LoadingSource.next(true);
    if(value.length <= 20 && value.length >= 1){
      this.searchQuery$.pipe(filter(Boolean, this.receivedBooks), debounceTime(1000), distinctUntilChanged()).subscribe((val: string)=>{
        const updatedVal = val.trim().toLowerCase();
        const path = this.BookRoutes.booksApi
        .replace(':search', updatedVal)
          this.httpApi.get(path).pipe(map((data:any)=>data.items)).subscribe((books: VolumeModel[])=>{ 
            if(books.length){
              this.LoadingSource.next();
              return this.setBooks = books;
            }
          })           
      })
    }
  } set setBooks(books: VolumeModel[]) {
    this.booksContainer = books
    this.receivedBooks = books.map((b: any)=>{return{...b.volumeInfo}})
    this.LoadingSource.next();
  } 

}
