import { Component } from '@angular/core';

@Component({
  selector: 'app-oanh-counter',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  template: `
    <div class="app">
      Parent: {{ myCount }}
      <app-oanh-counter-child
        [count]="myCount"
        (change)="countChange($event)">
      </app-oanh-counter-child>
    </div>
  `
})

export class OanhCounterComponent {
  myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }
}
