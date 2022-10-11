import { Component } from '@angular/core';
import { IntroType } from './class/intro-type';
import { Kendaraan } from './class/kendaraan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-daniel';
  say = 'Hai Kalian'

  constructor(){
    // let a = new IntroType();
    // a.introTypeAnnotation();

    const mobil = new Kendaraan();
    mobil.setMesin("1000cc");
    mobil.setRoda(4);

    console.log(mobil);
  }
}
