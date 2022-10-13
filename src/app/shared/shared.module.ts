import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
