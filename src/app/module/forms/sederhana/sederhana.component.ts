import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sederhana',
  templateUrl: './sederhana.component.html',
  styleUrls: ['./sederhana.component.scss']
})
export class SederhanaComponent implements OnInit {

  inputName: any;

  formGroupSederhana = new FormGroup({
    name: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    nickname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    job: new FormControl(""),
    balance: new FormControl("", [Validators.required, Validators.min(1000000)])
  });

  constructor() {
    this.formGroupSederhana.controls["name"].setValue("Daniel"); // to set value of form name
    // this.formGroupSederhana.get("nickname")?.setValue("Dannn"); // to set value of form nickname
    this.inputName = this.formGroupSederhana.controls["name"].value;
  }

  ngOnInit(): void {
  }

  onSubmitClick(){
    this.inputName = this.formGroupSederhana.controls["name"].value;
  }

  checkValidation(){
    alert(this.formGroupSederhana.controls["email"].valid)
  }

}
