import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
