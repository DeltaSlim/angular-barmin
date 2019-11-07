import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }


  getInProgressGames(sport:string) {
  
    return this.http.get(`https://barmin.cfapps.io/matches/inProgress/${sport}`);
  }

   getOpenGames(sport:string) {
  
    return this.http.get(`https://barmin.cfapps.io/matches/open/${sport}`);
  }

   getCurrentGames(sport:string) {
  
    return this.http.get(`https://barmin.cfapps.io/matches/current/${sport}`);
  }
}