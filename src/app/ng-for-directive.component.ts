import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
    <div>
      <ng-content></ng-content>
      directived by {{episode.director}}
    </div>
  `
})

export class NgForDirective implements OnDestroy, OnInit {
  @Input() episode: any;

  ngOnInit() {
    // console.log('component created', this.episode);
  }

  ngOnDestroy() {
    // console.log('destroying component', this.episode);
  }
}
