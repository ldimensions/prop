import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestDirective } from './directives/test.directive';
import { loginRouter } from './login.router';
import { CommonLayoutComponent } from '../../../layouts/common-layout/common-layout.component';
import { HeaderComponent } from '../../../layouts/common-layout/header/header.component';
import { FooterComponent } from '../../../layouts/common-layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      loginRouter
    )
  ],
  declarations: [LoginComponent, CommonLayoutComponent,HeaderComponent,FooterComponent, TestDirective]
})
export class LoginModule { }
