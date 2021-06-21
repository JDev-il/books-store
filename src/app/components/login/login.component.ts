import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {

  @BlockUI() loginLoader: NgBlockUI;
  
  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('')
  });
  
  constructor(public userService: UserService, public router: Router, public alerts: AlertsComponent) { }

  ngOnInit(): void {
  }

  detectTyping(){    
    this.userService.userVerification(this.formLogin.get('username').value)
  }
  submitLogin(){ 
    const verify = this.loginLoader.start('Verifing, please wait..');
    if(this.userService.userVerified){
      verify
      setTimeout(() => {
        this.loginLoader.stop()     
        this.alerts.login(true)
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500)
      }, 1500)   
     } else {
        verify
        setTimeout(() => {
        this.loginLoader.stop()     
          this.alerts.login(false)        
      }, 300);
    }
  }
}
