import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2> Should mankind colonize the Universe </h2>
    <h3> Agree: {{ agreed }}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters" 
               [name]="voter"
               (onVoted)="onVoted($event)">
    </app-voter>
  `
})

export class VoteTakerComponent {
  agreed: number = 0;
  disagreed: number = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
