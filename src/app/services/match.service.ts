import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/Match';
import { PagedResponse } from '../models/PagedResponse';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',"Accept": "application/json, text/plain, */*,application/hal+json"})
}

@Injectable()
export class MatchService {

  openUrl: string = 'https://barmin.cfapps.io/matches';

  constructor(private http: HttpClient) { }

  getOpenMatches() : Observable<any> {
    return this.http.get<any>(this.openUrl,{headers: httpOptions.headers});
  }
  
}