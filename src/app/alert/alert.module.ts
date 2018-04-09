import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AlertComponent } from './alert.component'

let directs: any[] = [
  AlertComponent
];

@NgModule({
  declarations: directs,
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AlertComponent]
})
export class AlertModule { }
