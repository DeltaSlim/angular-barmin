import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  liveGames: Object;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getInProgressGames('NFL').subscribe(data =>{
      this.liveGames = data;
      console.log(this.liveGames);
    });
  }

}