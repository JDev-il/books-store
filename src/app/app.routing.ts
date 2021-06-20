import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    }
]
