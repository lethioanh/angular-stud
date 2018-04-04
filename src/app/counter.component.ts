import { Component } from '@angular/core';

@Component({
  selector: 'rio-counter',
  template: `
    <div>
      <p>Counter: {{num}}</p>
      <button (click)="increment()" [disabled]="disButton">
        Increment
      </button>
    </div>
  `
})

export class CounterComponent {
  num: number = 0;
  disButton: boolean = false;

  increment() {
    if(this.num > 10) {
      this.disButton = true;
    } else {
      this.num++;
      this.disButton = false;
    }
  }
}
