import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  returnUrl: string; 

  constructor(
    private loginFormBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private spinnerService: Ng4LoadingSpinnerService    
  ) { }

  ngOnInit() {

    this.authService.logout();    

    this.loginForm = this.loginFormBuilder.group({
      email: ['',[ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      password:['',Validators.required]
    });
    
  }

  login() {
    this.loading = true;
    if(!this.loginForm.valid){
      return true;
    }
    this.spinnerService.show();    
    this.authService.login(this.loginForm.value).subscribe(
      userDetails => {
        console.log(userDetails);
        this.cookieService.set('userToken','token');
        this.spinnerService.hide();            
      },
      error => {
        console.log('Error: '+error);
        this.loading = false;
        //this.spinnerService.hide();                    
      }
    )
  
  }

}
