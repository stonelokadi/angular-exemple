import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginViewComponent } from './login-view/login-view.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';

import { primeNgModule } from './primeNgModule';

@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    SharedModule,
    ...primeNgModule,
    RouterModule.forChild(authRoutes),
  ]
})
export class AuthModule { }
