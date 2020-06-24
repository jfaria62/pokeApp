import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeAPIService } from './poke-api.service';

import { HttpClientModule } from '@angular/common/http';
import { GameBoardComponent } from './game-board/game-board.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
