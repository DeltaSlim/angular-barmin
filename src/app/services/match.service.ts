import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/Match';
import { PagedResponse } from '../models/PagedResponse';

@Injectable()
export class MatchService {

  openUrl: string = 'https://barmin.cfapps.io/matches';

  constructor(private http: HttpClient) { }

  getOpenMatches() : Observable<PagedResponse<Match>> {
    let params = new HttpParams();
    const date = new Date();
    params = params.append('matchTime',date.toISOString());
    params = params.append('matchTime','2999-01-01T00:00:00Z');
    params = params.append('sort','matchTime');
    return this.http.get<any>(this.openUrl, {params: params});
  }
  
}