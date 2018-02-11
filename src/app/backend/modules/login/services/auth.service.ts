import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class AuthService {

  public token: string;
  private loginURL = environment.API_URL+'/login';

  constructor(
    private http: Http,
    private cookieService: CookieService
  ) { }

  login(loginCred){
    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //'Content-Type':'application/json', 
    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginURL, loginCred)    
      .map((res: Response) => res.json())
  }

  
  logout() {
    //localStorage.removeItem('currentUser');
    //this.cookieService.deleteAll();
  }

}
