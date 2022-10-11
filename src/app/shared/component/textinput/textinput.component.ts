import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {

  text: any

  constructor() { }

  ngOnInit(): void {
  }

}
