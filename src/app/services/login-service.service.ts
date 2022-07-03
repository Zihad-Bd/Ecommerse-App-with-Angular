import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor() {
    console.log(this.isLoggedIn);
  }

  adminsCredential = [
    {
      email: 'zihadur.rahman@selise.ch',
      password: '01533397632',
    },
    {
      email: 'rakib.islam@gmail.com',
      password: '01765963946',
    },
  ];

  isLoggedIn: boolean = false;

  setLoginStatus(status: boolean) {
    this.isLoggedIn = status;
    this.loginStatusChanged.next(this.isLoggedIn);
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  loginStatusChanged: Subject<boolean> = new Subject<boolean>();

  getAdminsCredential() {
    return this.adminsCredential;
  }
}