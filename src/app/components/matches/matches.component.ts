import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

import { Match } from '../../models/Match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 openMatches: Match[];

  constructor(private matchService: MatchService) { }

ngOnInit() {

  this.matchService.getOpenMatches().subscribe(res => {
      this.openMatches = res._embedded.matches;
      console.log(res);
    });

  }

}