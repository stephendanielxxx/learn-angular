import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {

  inputText: any

  @Input() inputModel: any; // agar bisa mendapat input di component
  @Output() outputCallback = new EventEmitter<string>(); //untuk mengirim value ke parent

  constructor() { }

  ngOnInit(): void {
  }

  setToText(text: any){
    console.log(text.target.value);
    this.inputModel = text.target.value;
    //can process and manipulate inputModel here
    this.outputCallback.emit(this.inputModel);
    //send text from input to parent 
  }
}
