import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ReactiveFormsModule } from '@angular/forms';

/*=====  PrimeNG  ======*/
import { TabViewModule } from 'primeng/tabview'
import {InputTextModule} from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';


/*=====  Components  ======*/
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BookService } from './services/book.service';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserService } from './services/user.service';
import { AppRoutes } from './app.routing';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TabViewModule,  
    SharedModule,  
    CardModule,
    BrowserAnimationsModule,
    InputTextModule,
    RouterModule.forRoot(AppRoutes, {relativeLinkResolution: 'legacy'}),
    BlockUIModule.forRoot(),
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginComponent,
    SearchComponent,
    WishlistComponent,
    SearchBarComponent,
    DialogComponent,
    AlertsComponent,
  ],
  providers: [BookService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
