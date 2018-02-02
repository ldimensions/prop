import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestDirective } from './directives/test.directive';
import { loginRouter } from './login.router';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      loginRouter
    )
  ],
  declarations: [
    LoginComponent, 
    TestDirective
  ],
  providers: [
    LoginService    
  ]
})
export class LoginModule { }
