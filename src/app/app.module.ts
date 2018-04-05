import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter.component';
import { Counter2Component } from './counter-2.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { OanhCounterComponent } from './oanh-counter.component';
import { OanhCounterChildComponent} from './oanh-counter-child.component';
import { ChildComponent } from './child.component';
import { ChildSelectComponent } from './child-select.component';
import { NgStyleComponent } from './ng-style-directive.component';
import { NgClassDirective } from './ng-class-directive.component';
import { NgifDirective } from './ng-if-directive.component';
import { NgForDirective } from './ng-for-directive.component';


let directs: any[] = [
  AppComponent,
  HelloComponent,
  ChildComponent,
  ChildSelectComponent,
  CounterComponent,
  Counter2Component,
  NameParentComponent,
  NameChildComponent,
  NgClassDirective,
  NgifDirective,
  NgForDirective,
  NgStyleComponent,
  OanhCounterChildComponent,
  OanhCounterComponent,
  VersionParentComponent,
  VersionChildComponent,
  VoterComponent,
  VoteTakerComponent
];

@NgModule({
  declarations: directs,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
