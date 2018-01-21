import { Routes } from '@angular/router';
import { CommonLayoutComponent } from '../../../layouts/common-layout/common-layout.component';
import { LoginComponent } from './components/login/login.component';

export const loginRouter: Routes = [
    { 
        path: '', component: CommonLayoutComponent,
        children: [ { path: '', component: LoginComponent, pathMatch:'full' }]
    }
]