import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-live-upcoming',
  templateUrl: './live-upcoming.component.html',
  styleUrls: ['./live-upcoming.component.css']
})
export class LiveUpcomingComponent implements OnInit {

  liveUpcoming: Object;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getCurrentGames('NFL').subscribe(data =>{
      this.liveUpcoming = data;
      console.log(this.liveUpcoming);
    });
  }

}