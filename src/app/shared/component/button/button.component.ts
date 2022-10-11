import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-button', //nama tagging, bisa diubah2 misal daniel-button
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
