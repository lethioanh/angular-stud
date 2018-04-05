import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
    <div>
      <ng-content></ng-content>
      directived by {{episode.director}}
    </div>
  `
})

export class NgForDirective {
  @Input() episode: any;
}
