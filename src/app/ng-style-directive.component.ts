import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  template: `
    <p style="padding: 0.5rem"
       [ngStyle]="{
        'color': 'red',
        'font-weight': 'bold',
        'borderBottom': borderStyle
    }">
      <ng-content></ng-content>
    </p>
    <p style="padding: 1rem"
        [ngStyle]="alertStyles">
      Custom
    </p>
  `
})

export class NgStyleComponent {
  borderStyle: string = '0.5px solid black';
  alertStyles: any = {
    'color': 'red',
    'font-weight': 'bold',
    'borderBottom': this.borderStyle
  };
}
