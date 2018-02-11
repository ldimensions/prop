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

  public loginForm: FormGroup;
  public loading:boolean = false;
  public returnUrl: string; 
  public errorMsg: string;


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
    if(!this.loginForm.valid){
      return true;
    }
    this.loading = true;
    this.spinnerService.show();    
    this.authService.login(this.loginForm.value).subscribe(
      userDetails => {
        this.loading = false;
        this.spinnerService.hide();                    
        if(userDetails.statusCode == 200){
          this.cookieService.set('userToken',userDetails.result.token);  
        }else{
          this.errorMsg = userDetails.message;
        }
      },
      error => {
        this.errorMsg = JSON.parse(error._body).message;        
        this.loading = false;    
        this.spinnerService.hide();                    
      }
    )
  
  }

}
