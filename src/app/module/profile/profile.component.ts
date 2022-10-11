import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  outputText: any

  constructor(private readonly profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.setData("daniel", 20, "programmer");
  }

  //this method is set to handle action on html
  setToTextParent(output: string){
    this.outputText = output;
  }
}
