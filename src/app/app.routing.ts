import { Routes } from '@angular/router';

export const appRouter: Routes = [
    { path: 'login', loadChildren:'app/backend/modules/login/login.module#LoginModule'}
]