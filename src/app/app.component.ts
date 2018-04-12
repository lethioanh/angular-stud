import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild,  ViewChildren } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertListQueryComponent } from './alert-list-query.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from './services/search.service';
import 'rxjs/Rx';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterViewInit, OnInit {
  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChild('first') alertF: AlertListQueryComponent;
  @ViewChildren(AlertListQueryComponent) alerts: QueryList<AlertListQueryComponent>;
  alertsArr = [];
  helloName: string;
  num: number = 0;
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
  parentCount = 0;
  price = 100.123456;
  searchField: FormControl;
  coolForm: FormGroup;
  result: any;

  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor: Immutable.Map<string, string> = Immutable.Map({
    firstName: 'Arnold',
    lastName: 'Schwarzenegger'
  });
  tab = 0;
  tabNumber = 0;
  tabs: any = [
    { title: 'Tab 1', content: 'Tab content 1' },
    { title: 'Tab 2', content: 'Tab content 2' },
    { title: 'Tab 3', content: 'Tab content 3' }
  ]

  fileSizes = [10, 100, 1000, 10000, 100000, 10000000, 10000000000];
  largeFileSize = Math.pow(10, 15);

  constructor(
    private elementRef: ElementRef,
    private searchService: SearchService,
    private fb: FormBuilder
  ) {
    this.helloName = 'Other World';
    this.searchField = new FormControl();
    this.coolForm = fb.group({search: this.searchField });
  }

  ngOnInit() {
    const movie1 = {
      name: 'Star Wars',
      episode: 7
    };

    const movie11 = Immutable.Map<string, number>({
      name: 'star wars 1',
      episode: 8
    });

    let movie22 = movie11;

    movie22 = movie22.set('episode', 9);
    const movie2 = Object.assign({}, movie1, { episode: 8 });
    const movie3 = Object.freeze(Object.assign({}, movie1));

    // movie3.episode = 8;

    console.log(movie1.episode); // writes 7
    console.log(movie2.episode); // writes 8
    console.log(movie3.episode); // writes7;

    console.log(movie11.get('episode')); // writes 7
    console.log(movie22.get('episode')); // writes 8
    this.mapImmu();
    this.mutable();
    this.mapMerge();
    this.deleteImmu();
  }

  deleteImmu() {
    let movie = Immutable.fromJS({
      name: 'Star Wars',
      episode: 7,
      actors: [
        { name: 'Daisy Ridley', character: 'Rey'},
        { name: 'Harrison Ford', character: 'Han Solo' }
      ],
      mpaa: {
        rating: 'PG-13',
        reason: 'sci-fi action violence'
      }
    });

    movie = movie.delete('mpaa');

    console.log(movie.toObject());
  }

  mapMerge() {
    const baseButton = Immutable.Map<string, any>({
      text: 'Click me!',
      state: 'inactive',
      width: 200,
      height: 30
    });

    const submitButton = baseButton.merge({
      text: 'Submit',
      state: 'active'
    });

    console.log(submitButton);
  }

  toggleExist() {
    this.exist = !this.exist;
  }

  addOtherEpisode() {
    const episodesCopy =  JSON.parse(JSON.stringify(this.episodes));
    this.episodes = [...episodesCopy, this.otherEpisodes.pop()];
  }

  trackById(index: number, episode: any): number {
    return episode.id;
  }


  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

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

  search() {
    this.searchService.search(this.searchField.value)
      .subscribe( result => {
        this.result = result.artists.items
      });
  }

  changeActor(): void {
    this.actor = this.actor.merge({firstName: 'Nicholas', lastName: 'Cage'});
  }

  mapImmu() {
    const features = Immutable.Map<string, boolean>({
      'send-links': true,
      'send-files': true,
      'local-storage': true,
      'mirror-notifications': false,
      'api-access': false
    });

    const myFeatures = features.reduce((providedFeatures, provided, feature) => {
      if (provided) {
        providedFeatures.push(feature);
      }
      return providedFeatures;
    }, []);

    console.log(myFeatures);
  }

  mutable() {
    const list = [];
    let val = "";

    Immutable.Range(0, 1000000)
      .forEach(function() {
        val += "concatenation";
        list.push(val);
      });

    console.log(list);
  }

}
