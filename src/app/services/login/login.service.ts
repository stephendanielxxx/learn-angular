import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly http: HttpClient) { }

  validateLogin(username: string, password: string): boolean {
    if(username == "daniel" && password == "daniel"){
      return true;
    }
    return false;
  }

  postLogin(body: any): Observable<any> {
    // return this.http.post("https://zoo-animal-api.herokuapp.com/animals/rand", body);
    alert(body.value);
    const params = new HttpParams()
    .set('jobseekerEmail', 'manoppo25@gmail.com')
    .set('jobseekerPassword', 'Superadmin123@');

     this.http.get
    return this.http.post("http://54.251.83.205:9091/api/v1/jobseeker/login",params);
  }
}
