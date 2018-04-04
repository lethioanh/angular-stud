import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rio-counter-2',
  template: 'app/counter.component.html'
})

export class Counter2Component {
  @Input() count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}

