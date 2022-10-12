import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getUsername(output: string){
    this.username = output;
  }

  getPassword(output: string){
    this.password = output;
  }

  onLogin(){
    alert("username : "+this.username+" | password : "+this.password);
  }
}
