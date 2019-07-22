import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../models/Match';
import { PagedResponse } from '../models/PagedResponse';

@Injectable()
export class MatchService {

  openUrl: string = 'https://barmin.cfapps.io/matches';

  constructor(private http: HttpClient) { }

  getOpenMatches(params?: HttpParams) : Observable<PagedResponse<Match>> {
    params = params ? params : new HttpParams();
    const date = new Date();
    params = params.append('matchTime',date.toISOString());
    params = params.append('matchTime','2999-01-01T00:00:00Z');
    params = params.append('sort','matchTime');
    return this.http.get<any>(this.openUrl, {params: params});
  };

  getLiveMatches(params?: HttpParams) : Observable<PagedResponse<Match>> {
    params = params ? params : new HttpParams();
    if (!params.has('projection')) {
        params.append('projection', 'results');

    }
    params.append('isFinished', 'false');
    const date = new Date();
    params = params.append('matchTime','1970-01-01T00:00:00Z');
    params = params.append('matchTime',date.toISOString());
    params = params.append('sort','matchTime');
    return this.http.get<any>(this.openUrl, {params: params});
  };
  
}