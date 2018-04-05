import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  template: '<ng-content></ng-content>'
})

export class NgifDirective {
  constructor(){
    console.log('example constructed');
  }
}
