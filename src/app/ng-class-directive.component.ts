import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  template: `
    <div>
      <p ngClass="centerd-text underlined" class="orange">
        <b>Binding a string</b>
        <ng-content></ng-content>
      </p>
    </div>
    <div>
      <p [ngClass]="['warning', 'big']">
        <b>Binding an array</b>
        <ng-content></ng-content>
      </p>
    </div>
    <div>
      <p [ngClass]="{card: true, dark: false, flat: flat}">
        <b>Binding an object</b>
        <ng-content></ng-content>
        <br>
        <button type="button" (click)="flat=!flat">Toggle Flat</button>
      </p>
    </div>
    
  `,
  styles: [`
    .centerd-text {
      text-align: center;
    }
    .underlined {
      border-bottom: 1px solid #ccc;
    }
    .orange {
      color: orange;
    }
    .warning {
      color: red;
      font-weight: bold;
    }
    .big {
      font-size: 1.2rem;
    }
    .card {
      border: 1px solid #eee;
      padding: 1rem;
      margin: 0.4rem;
      font-family: sans-serif;
      box-shadow: 2px 2px 2px #888888;
    }
    .dark {
      background-color: #444;
      border-color: #000;
      color: #fff;
    }
    .flat {
      box-shadow: none;
    }
  `]
})

export class NgClassDirective {
  flat: boolean = false;

}
