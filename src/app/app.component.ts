import { AfterContentInit, AfterViewInit, Component, ElementRef, QueryList, ViewChild,  ViewChildren } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertListQueryComponent } from './alert-list-query.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChild('first') alertF: AlertListQueryComponent;
  @ViewChildren(AlertListQueryComponent) alerts: QueryList<AlertListQueryComponent>;
  alertsArr = [];
  helloName: string;
  num: number = 0;
  parentCount: number = 0;
  exist: boolean = true;
  node: string;
  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' }
  ];
  otherEpisodes = [
    { title: 'Two Swords', director: 'D. B. Weiss', id: 8 },
    { title: 'The Lion and the Rose', director: 'Alex Graves', id: 9 },
    { title: 'Breaker of Chains', director: 'Michelle MacLaren', id: 10 },
    { title: 'Oathkeeper', director: 'Michelle MacLaren', id: 11 }
  ];

  constructor( private elementRef: ElementRef ) {
    this.helloName = 'Other World';
  }

  toggleExist() {
    this.exist = !this.exist;
  }

  addOtherEpisode() {
    let episodesCopy =  JSON.parse(JSON.stringify(this.episodes));
    this.episodes= [...episodesCopy, this.otherEpisodes.pop()];
  }

  trackById(index: number, episode: any): number {
    return episode.id;
  }

  tab: number = 0;

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

  tabNumber: number = 0;
  tabs: any = [
    { title: 'Tab 1', content: 'Tab content 1' },
    { title: 'Tab 2', content: 'Tab content 2' },
    { title: 'Tab 3', content: 'Tab content 3' }
  ]

  setTabNum(num: number) {
    this.tabNumber = num;
  }

  isSelectedNum(num: number) {
    return this.tabNumber === num;
  }

  showAlert() {
    this.alert.show();
  }

  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }

  showAlertLQ(step) {
    this.alertsArr[step - 1].show();
  }

  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);

    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }

}
