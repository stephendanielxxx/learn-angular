import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SederhanaComponent } from './sederhana/sederhana.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SederhanaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
