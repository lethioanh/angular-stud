import { Component  } from '@angular/core';
import { Observable  } from 'rxjs/Observable';

@Component({
  selector: 'app-error-handing',
  template: `
    <h2>Angular Component Using Observables!</h2>
    <h6 style="margin-bottom: 0">VALUES:</h6>
    <div *ngFor="let value of values"> {{value}}</div>

    <h6 style="margin-bottom: 0">ERRORS:</h6>
    <div>Errors: {{anyErrors}}</div>

    <button style="margin-top: 2rem;" (click)="init()">Init</button>
  `
})

export class ErrorHandingComponent {
  data: Observable<number>;
  values: number[];
  anyErrors: boolean;

  constructor() {
  }

  init() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(10);
      }, 1500);

      setTimeout(() => {
        observer.error('hey something bad happend i guess');
      }, 2500);

      setTimeout(() => {
        observer.next(50);
      }, 4500);
    });

    const subscription = this.data.subscribe(
      (value: number) => {
        this.values.push(value);
      },
      error => this.anyErrors = true
    );
  }
}
