import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

import { Match } from '../../models/Match';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredMatches: Match[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getFeaturedMatches().subscribe(res =>{
      this.featuredMatches = res._embedded.matches;
      console.log(res);
    });
  }

}