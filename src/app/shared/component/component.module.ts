import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TextinputComponent } from './textinput/textinput.component';
import { FormsModule } from '@angular/forms';
import { PasswordinputComponent } from './passwordinput/passwordinput.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextinputComponent,
    PasswordinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextinputComponent
  ]
})
export class ComponentModule { }
