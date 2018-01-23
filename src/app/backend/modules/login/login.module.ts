import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestDirective } from './directives/test.directive';
import { loginRouter } from './login.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      loginRouter
    )
  ],
  declarations: [
    LoginComponent, 
    TestDirective
  ]
})
export class LoginModule { }
