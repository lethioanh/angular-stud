import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div *ngIf="!hidden">
      <div class="backdrop" (click)="hide()"></div>
      <div class="modal">
        <ng-content></ng-content>
        <div>
          <button (click)="hide()"><i class="fa fa-close"></i></button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: plum;
      border: 1px solid #ddd;
      padding: 1rem;
    }

  `]
})


export class AlertComponent {
  hidden: boolean = true;

  show() {
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
 }
