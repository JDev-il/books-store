/*=====  Initial Imports  ======*/
import { Injectable } from '@angular/core';


/*=====  Models & Interfaces =====*/
export interface User {username: string, password: string}


@Injectable({
  providedIn: 'root'
})

export class UserService {

  userVerified: boolean = false;
  details: User = {username: '', password: ''}

  constructor() {}

  userVerification(user: string) {    
    if(user.length >= 3){
      this.userVerified = true
      this.details.username = user
    } else {
      this.details.username = ''
      this.userVerified = false
    }    
  }
}
