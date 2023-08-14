import { Observable } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'Animal' on  
  subscription.
*/

// https://www.learnrxjs.io/learn-rxjs/operators/creation/create

const msgs = Observable.create(function (observer) {
  observer.next('Hello');
  observer.next('Cat');
  observer.next('Hello');
  observer.next('Dog');
});

const subscribe = msgs.subscribe((val) => console.log(val));
