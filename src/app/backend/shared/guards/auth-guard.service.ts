import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    
  constructor(private cookieService: CookieService, public router: Router){}
  canActivate() {
    console.log('cookie check');
    if(this.cookieService.get('userToken')){
      return true;      
    }
    this.router.navigate(['login']);
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
