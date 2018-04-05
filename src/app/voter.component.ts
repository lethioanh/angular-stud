import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="voted"> Agree </button>
    <button (click)="vote(false)" [disabled]="voted"> Disagree </button>
  `
})

export class VoterComponent {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agree: boolean) {
    this.onVoted.emit(agree);
    this.voted = true;
  }
}
