import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  outputText: any

  constructor() { }

  ngOnInit(): void {
  }

  //this method is set to handle action on html
  setToTextParent(output: string){
    this.outputText = output;
  }
}
