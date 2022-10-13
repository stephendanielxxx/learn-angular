import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getFruits(): Observable<any> {
    return of('apple', 'orange', 'grape');
  }

  customObservable(): Observable<any> {
    return new Observable((subscriber) => {
        setTimeout(() => {
          subscriber.next("apple");
        }, 3000);

        setTimeout(() => {
          subscriber.complete();
        }, 12000);
       
        setTimeout(() => {
          subscriber.error("error test");
        }, 11000);

        setTimeout(() => {
          subscriber.next("orange");
        }, 6000);

        setTimeout(() => {
          subscriber.next("mango");
        }, 9000);
      });
  }
}
