import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  login(user: string, password: string) {
    const UserInfo = [
      {
        email: user,
        password: password,
      },
    ];
    sessionStorage.setItem('UserInfo', JSON.stringify(UserInfo));
    return true;
  }

  registration(name: string, user: string, password: string) {
    const UserInfo = [
      {
        name: name,
        email: user,
        password: password,
      },
    ];
    sessionStorage.setItem('NewUser', JSON.stringify(UserInfo));
    return true;
  }

  LogOut() {
    if (sessionStorage.getItem('UserInfo')) {
      sessionStorage.removeItem('Userinfo');
    }
    return true;
  }
}
