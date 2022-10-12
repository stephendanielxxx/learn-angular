import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin(username: string, password: string): boolean {
    if(username == "daniel" && password == "daniel"){
      return true;
    }
    return false;
  }
}
