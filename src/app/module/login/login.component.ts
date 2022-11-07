import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.formGroupLogin.valid){
      this.loginService.postLogin(this.formGroupLogin.value).subscribe(
        (response) => {
          alert("Success");
          alert(JSON.stringify(response));
        },
        (error) => {
          alert("error");
          alert(JSON.stringify(error));
        }
      );
    }else{
      alert("Form not valid");
    }
  }
}
