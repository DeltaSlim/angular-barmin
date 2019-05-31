import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchService } from './services/match.service';
import { ActiveBetsComponent } from './components/active-bets/active-bets.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, MatchesComponent, ActiveBetsComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MatchService]
})
export class AppModule { }
