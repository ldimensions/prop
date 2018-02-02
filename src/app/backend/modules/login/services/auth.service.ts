import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  login(loginCred): Observable<Array<any>> {
    return this.http.post(this.loginURL, loginCred)
      .map((res: Response) => res.json())
  }

  logout() {
    //localStorage.removeItem('currentUser');
    //this.cookieService.deleteAll();
}

}
