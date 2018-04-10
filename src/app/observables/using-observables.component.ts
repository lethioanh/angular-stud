import { Component  } from '@angular/core';
import { Observable  } from 'rxjs/Observable';

@Component({
  selector: 'app-using-observable',
  template: `
      <h2>Angular Component Using Observables!</h2>
      <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values"> {{value}}</div>

      <h6 style="margin-bottom: 0">ERRORS:</h6>
      <div>Errors: {{anyErrors}}</div>

      <h6 style="margin-bottom: 0">FINISHED:</h6>
      <div> Finished: {{finished}}</div>

      <button style="margin-top: 2rem;" (click)="init()">Init</button>
  `
})

export class UsingObservableComponent {
  private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() {}

  init() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(+42);
      }, 1000);

      setTimeout(() => {
        observer.next(+43);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    let subscription = this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = true,
      () => this.finished = true
    );
  }
}
