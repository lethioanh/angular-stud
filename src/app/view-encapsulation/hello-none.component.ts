import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-none',
  template: `
    <p class="hello other-hello">
      <code> None/ .hello: </code>
      Hello World.
    </p>
  `,
  styles:[`
    .other-hello {
      color: white;
      background-color: gray;
      padding: 5px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class HelloNoneComponent {
 name: string = 'World';
}
