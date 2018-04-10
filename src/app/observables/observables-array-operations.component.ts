import {Component, ChangeDetectorRef } from '@angular/core';
import {Http} from '@angular/http';
// import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';



@Component({
  selector: 'app-observable-array-operations',
  template: `
    <b>Angular 2 HTTP requests using RxJs Observables!</b>

    <ul *ngFor="let doctor of doctors">
      <li>{{doctor}}</li>
    </ul>
  `
})

export class ObservableArrayOperationsComponent {
  private doctors = [];
  constructor(http: Http, cd: ChangeDetectorRef) {
    http.get('http://jsonplaceholder.typicode.com/users/')
      .flatMap(data => data.json())
      .filter((person) => person['id'] > 5)
      .map((person) => 'Dr. ' + person['name'])
      .subscribe((data) => {
        this.doctors.push(data);
        console.log(this.doctors, data);
        cd.detectChanges();
      });
  }

}
