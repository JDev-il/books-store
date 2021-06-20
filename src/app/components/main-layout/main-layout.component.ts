import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MainLayoutComponent implements OnInit {

  subscriber: Subscription;
  @Input() redirect: boolean;
  
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    if(!this.userService.userVerified) {
      this.router.navigate(['login']);
    }
  }

}
