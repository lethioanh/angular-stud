import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-observable-form-event',
  template: `
    <form [formGroup]="coolForm">
      <input formControlName="email" name="email">
    </form>
    <div>
      <b>You Typed Reversed:</b> {{data}}
    </div>
  `
})

export class ObservableFormEventsComponent {

  email: FormControl;
  coolForm: FormGroup;
  data: string;

  constructor(private fb: FormBuilder) {
    this.email = new FormControl();

    this.coolForm = fb.group({
      email: this.email
    });

    this.email.valueChanges
      .map(n => n.split('').reverse().join(''))
      .subscribe(value => this.data = value);
  }
}
