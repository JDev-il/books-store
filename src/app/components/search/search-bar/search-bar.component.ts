import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchValue = new EventEmitter

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }

  getBookValue(e){
    if(e.target !== ''){
      this.searchValue.emit(e.target.value)
    }
  }
}
