import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Match } from '../../models/Match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 liveMatches: Match[];
 openMatches:Match[];

  constructor(private matchService: MatchService) { }

ngOnInit() {
let params = new HttpParams();
// params = params.append('sport', 'NFL');
// params = params.append('projection', 'odds');
params = params.append('size', '10');

  this.matchService.getLiveMatches(params).subscribe(res => {
      this.liveMatches = res._embedded.matches;
    });

 this.matchService.getOpenMatches(params).subscribe(res => {
      this.openMatches = res._embedded.matches;
    });

  }

}