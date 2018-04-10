import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { TabContentComponent } from './tab-content.component';
import { TabComponent } from './tab.component';
import { Tab3Component } from './tab3.component';
import { AlertComponent } from './alert.component';
import { AlertListQueryComponent } from './alert-list-query.component';
import { HelloEmulatedComponent} from './view-encapsulation/hello-emulated.component';
import { HelloNativeComponent } from './view-encapsulation/hello-native.component';
import { HelloNoneComponent } from './view-encapsulation/hello-none.component';
import { UsingObservableComponent } from './observables/using-observables.component'

const directs: any[] = [
  AlertComponent,
  AppComponent,
  AlertListQueryComponent,
  HelloComponent,
  HelloEmulatedComponent,
  HelloNativeComponent,
  HelloNoneComponent,
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
  TabComponent,
  Tab3Component,
  TabContentComponent,
  VersionParentComponent,
  VersionChildComponent,
  VoterComponent,
  VoteTakerComponent,
  UsingObservableComponent
];

@NgModule({
  declarations: directs,
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
