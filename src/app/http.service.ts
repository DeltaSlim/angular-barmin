import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }


  getLiveGames(params?:HttpParams) {
    params = params ? params : new HttpParams();
    if (!params.has('projection')) {
        params.append('projection', 'results');

    }
    params.append('isFinished', 'false');
    const date = new Date();
    params = params.append('matchTime','1970-01-01T00:00:00Z');
    params = params.append('matchTime',date.toISOString());
    params = params.append('sort','matchTime');
    return this.http.get('https://barmin.cfapps.io/matches', {params: params});
  }
}