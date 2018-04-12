import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http.get(`https://api.spotify.com/v1/artists/${term}`)
      .map(response => response.json());
  }
}

