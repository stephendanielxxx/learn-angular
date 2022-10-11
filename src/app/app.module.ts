import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './module/profile/profile.module';
import { PendapatanComponent } from './module/admin/report/pendapatan/pendapatan.component';
import { PengeluaranComponent } from './module/admin/report/pengeluaran/pengeluaran.component';

@NgModule({
  declarations: [
    AppComponent,
    PendapatanComponent,
    PengeluaranComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
