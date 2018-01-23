import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { PrintLayoutComponent } from './layouts/print-layout/print-layout.component';

export const appRouter: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    {
        path: '',
        component: CommonLayoutComponent,
        children: [ 
            { path: '', redirectTo: 'login', pathMatch: 'full'},            
            { path: 'login', loadChildren:'app/backend/modules/login/login.module#LoginModule'}, 
            { path: 'user', loadChildren:'app/backend/modules/user/user.module#UserModule'}
        ],
    },
    {
        path: '',
        component: PrintLayoutComponent,
        children: [ 
            { path: 'property', loadChildren:'app/backend/modules/property/property.module#PropertyModule'} 
        ]
    }, 
    { path: '**', redirectTo: 'login' }
]