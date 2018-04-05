import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h4> Child Component </h4>
      {{ childContent }}
      <ng-content></ng-content>
    </div>
  `
})

export class ChildComponent {
  childContent: string = 'Content default';

}
