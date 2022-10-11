import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  name: string = "";
  age: number = 0;
  job: string = "";

  constructor() { }

  setData(name: string, age: number, job: string){
    this.name = name;
    this.age = age;
    this.job = job;
  }

  clearProfile(){
    this.name = "";
    this.age = 0;
    this.job = "";
  }
}
