import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';


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
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginService.logout();    

    this.loginForm = this.loginFormBuilder.group({
      email: ['',[ Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      password:['',Validators.required]
    })
    
  }

  login() {
    this.loading = true;
    if(!this.loginForm.valid){
      return true;
    }
    this.loginService.login(this.loginForm.value).subscribe(
      userDetails => {
        console.log(userDetails)
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  
  }

}
