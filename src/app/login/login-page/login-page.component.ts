import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginData = {
    email: null,
    password: null,
  };

  isLoggedIn: boolean = false;

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.getLoginStatus();
    console.log('lazy');
    this.loginService.loginStatusChanged.subscribe((value) => {
      this.isLoggedIn = value;
      console.log(value);
    });
    //this.isLoggedIn = this.loginService.getLoginStatus();
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.loginService.setLoginStatus(true);
  }

  isAdmin() {
    let exist: boolean = false;
    let adminsCredential = this.loginService.getAdminsCredential();
    for (let i = 0; i < adminsCredential.length; ++i) {
      if (
        adminsCredential[i].email == this.loginData.email &&
        adminsCredential[i].password == this.loginData.password
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
