import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {

  @Output() approvedEmmiter = new EventEmitter();
  
  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('')
  });
  
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  detectTyping(){    
    this.userService.userVerification(this.formLogin.get('username').value)
  }
  submitLogin(){    
    this.router.navigate(['/']);
  }
}
