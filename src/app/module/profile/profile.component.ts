import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  outputText: any
  name: string = "";
  age: number = 0;
  job: string = "";

  constructor(public readonly profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.setData("daniel", 20, "programmer");
    this.name = this.profileService.name;
    this.age = this.profileService.age;
    this.job = this.profileService.job;
  }

  //this method is set to handle action on html
  setToTextParent(output: string){
    this.outputText = output;
  }

  onClearProfile(){
    console.log("cleared");
    this.profileService.clearProfile();
    this.ngOnInit()
  }
}
