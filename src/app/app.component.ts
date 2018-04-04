import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  helloName: string;

  num: number = 0;
  parentCount: number = 0;

  constructor() {
    this.helloName = 'Other World';
  }

  ngOnChanges(val: number) {
    this.parentCount = val;
  }
}
