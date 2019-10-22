import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveComponent } from './live/live.component';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { PerksComponent } from './perks/perks.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, LiveComponent, FooterComponent, HomeComponent, PerksComponent],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }
