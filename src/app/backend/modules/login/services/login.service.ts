import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class LoginService {

  public token: string;
  private loginURL = environment.API_URL+'/login';

  constructor(private http: Http) { }

  login(loginCred): Observable<Array<any>> {
    return this.http.post(this.loginURL, loginCred)
      .map((res: Response) => res.json())
  }

  logout() {
    // remove user from local storage to log user out
    //localStorage.removeItem('currentUser');
}

}
