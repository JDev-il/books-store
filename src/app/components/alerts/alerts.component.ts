import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})


export class AlertsComponent implements OnInit {

  //Login
  private fail = Swal;
  private success = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  //Books
  private bookExists = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: true,
    confirmButtonColor: 'grey'
  });
  private bookAdded = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500
  })


  //WishList
  private removedFromWishList = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    returnFocus: true,
    iconColor: 'red',
    timer: 1200,
  });


  constructor() { }

  ngOnInit(): void {
    
  }

  login(varified: boolean) {
    if(!varified){
      this.fail.fire({
        title: 'Login failed!',
        text: 'Please fill missing fields!',
        icon: 'error',
        confirmButtonText: 'Try again',
        confirmButtonColor: 'red'
      });
    } else {
      this.success.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    }
  };
  

  books(bookStatus: boolean){
    if(!bookStatus){
      this.bookExists.fire({
        icon: 'error',
        title: 'Book already exists in list!'
      })
    } else {
      this.bookAdded.fire({
        icon: 'success',
        title: 'Book successfully added!'
      })
    }
  };


  wishlist(){
    this.removedFromWishList.fire({
      icon: 'success',
      title: 'Book removed from list!'
    })
  }


}
