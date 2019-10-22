import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }


  getLiveGames(sport:string) {
  
    return this.http.get(`https://barmin.cfapps.io/matches/current/${sport}`);
  }
}