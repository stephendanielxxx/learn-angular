import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  getUsername(output: string){
    this.username = output;
  }

  getPassword(output: string){
    this.password = output;
  }

  onLogin(){
    let loginResult = this.loginService.validateLogin(this.username, this.password);
    if(loginResult){
      alert("Login Sukses");
    }else{
      alert("Login Gagal");
    }
  }
}
