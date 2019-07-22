import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    let params = new HttpParams();
    params = params.append('size', '5');

    this.matchService.getOpenMatches(params).subscribe(res =>{
      this.featuredMatches = res._embedded.matches;
      console.log(res);
    });
  }

}