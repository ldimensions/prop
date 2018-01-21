import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TestDirective } from './directives/test.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListingComponent, UserViewComponent, UserAddComponent, UserEditComponent, TestDirective]
})
export class UserModule { }
