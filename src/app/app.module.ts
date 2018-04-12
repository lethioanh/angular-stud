import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { UsingObservableComponent } from './observables/using-observables.component';
import { ErrorHandingComponent } from './observables/error-handing.component';
import { ObservableFormEventsComponent } from './observables/observable-form-events.component';
import { ObservableArrayOperationsComponent } from './observables/observables-array-operations.component';
import { SearchService } from './services/search.service';
import { HttpModule } from '@angular/http';
import { MovieComponent } from './enforcing-immutability/movie.component';
import { VisitRangleComponent } from './Directive/visit-rangle.component';
import { ConfirmDirective } from './Directive/confirm.directive';
import { HighlightDivDirective } from './Directive/highlight-div.directive';
import { HighlightPDirective } from './Directive/highlight-p.directive';
import { HighlightDirective } from './Directive/highlight.directive';
import { CardComponent } from './Directive/card.component';
import { DelayDirective } from './Directive/delay.directive';
import { FormatFileSizePipe } from './pipes/format-file-size.pipe';
import { ButtonPressDirective } from './Directive/button-press.directive';
import { AnimateNumberPipe } from './pipes/animate-number.pipe';

const directs: any[] = [
  AlertComponent,
  HighlightDivDirective,
  HighlightPDirective,
  HighlightDirective,
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
  UsingObservableComponent,
  ErrorHandingComponent,
  ObservableFormEventsComponent,
  ObservableArrayOperationsComponent,
  MovieComponent,
  VisitRangleComponent,
  ConfirmDirective,
  CardComponent,
  DelayDirective,
  FormatFileSizePipe,
  ButtonPressDirective,
  AnimateNumberPipe
];

@NgModule({
  declarations: directs,
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
