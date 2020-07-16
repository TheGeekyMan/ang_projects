import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {AuthService,AuthResponseData} from './auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm:FormGroup;
  error:String;
  isLoginMode = true;
  constructor(private authService:AuthService,private routerService:Router) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  onLogin(){
    this.isLoginMode = true;
    this.onSubmit();
  }
  onSignUp(){
    this.isLoginMode = false;
    this.onSubmit();
  }

  onSubmit(){
    if(!this.authForm.valid){
      return;
    }

    const email  = this.authForm.value.email;
    const pass = this.authForm.value.password;

    let authObs = new Observable<AuthResponseData>();  
    
    this.error = null;
    if(this.isLoginMode){
      authObs = this.authService.login(email,pass);
    }else{
      authObs = this.authService.signup(email,pass);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.routerService.navigate(["/post-list"]);
      },
      (errorMessage) =>{
        this.error = errorMessage;
        console.log(errorMessage);
      }
    );
    this.authForm.reset();

  }

  onLogout(){
    this.authService.logout;
  }

}