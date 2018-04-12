import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from "rxjs";

@Pipe({
  name: 'animateNumber',
  pure: false
})

export class AnimateNumberPipe implements PipeTransform {
  private currentNumber: number = null;
  private targetNumber: number = null;

  transform(targetNumber: number) {
    if(targetNumber !== this.targetNumber) {
      this.currentNumber = this.targetNumber || targetNumber;
      this.targetNumber = targetNumber;

      const diff = this.targetNumber - this.currentNumber;

      Observable.interval(100)
        .take(diff)
        .subscribe(() => {
          this.currentNumber++;
        });
    }

    return this.currentNumber;
  }
}
