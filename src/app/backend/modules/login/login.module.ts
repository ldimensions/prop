import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestDirective } from './directives/test.directive';
import { loginRouter } from './login.router';
import { AuthService } from './services/auth.service';

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
    AuthService    
  ]
})
export class LoginModule { }
