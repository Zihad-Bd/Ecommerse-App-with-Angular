import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  /*   loginData = {
    email: null,
    password: null,
  }; */

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  isLoggedIn: boolean = false;

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.setLoginCredentials();
    this.isLoggedIn = this.loginService.getLoginStatus();
    console.log('lazy');
    this.loginService.loginStatusChanged.subscribe((value) => {
      console.log(value);
      
      this.isLoggedIn = value;
      console.log(value);
    });
    //this.isLoggedIn = this.loginService.getLoginStatus();
  }

  setLoginCredentials() {
    let loginData = {
      email: this.loginService.adminsCredential[0].email,
      password: this.loginService.adminsCredential[0].password
    }
    this.loginForm.setValue(loginData);
  }

  onSubmit() {
    this.loginService.setLoginStatus(true);
  }

  isAdmin() {
    let exist: boolean = false;
    let adminsCredential = this.loginService.getAdminsCredential();
    for (let i = 0; i < adminsCredential.length; ++i) {
      if (
        adminsCredential[i].email == this.loginForm.value.email &&
        adminsCredential[i].password == this.loginForm.value.password
      ) {
        exist = true;
        break;
      }
    }
    return exist;
  }

  onClickLogout() {
    this.loginService.setLoginStatus(false);
  }
}
