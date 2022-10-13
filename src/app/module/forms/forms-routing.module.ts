import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SederhanaComponent } from './sederhana/sederhana.component';

const routes: Routes = [
  {
    path: "sederhana",
    component: SederhanaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
