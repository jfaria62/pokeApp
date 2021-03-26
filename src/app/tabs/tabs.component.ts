import { Component, OnInit, Input, EventEmitter, NgModule } from '@angular/core';
import {PokeAPIService} from '../poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdownModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

@NgModule({
  imports: [ NgbDropdownModule,
    NgbDropdownConfig

  ],
})


export class TabsComponent implements OnInit {
  pokeList = [];
  pokeService: PokeAPIService;
  activatedRoute: ActivatedRoute;
  subscription;
  iconOne;
  iconTwo = document.getElementById('player2');

  constructor(activatedRoute: ActivatedRoute, pokeService: PokeAPIService) {
    this.activatedRoute = activatedRoute;
    this.pokeService = pokeService;
  }

  chooseIcon(name, player) {
    this.pokeService.setNumber(name, player);
    console.log(name);
    this.fetchIcons();
  }

  fetchIcons() {
    let p1 = this.pokeService.getNumberOne();
    let p2 = this.pokeService.getNumberTwo();
    // if p1 or p2 return valid, set picture to set icon
    if (p1) {
      this.iconOne.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + p1 + '.png');
    }
    if (p2) {
      this.iconTwo.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + p2 + '.png');
    }

  }

  ngOnInit() {
    this.iconOne = document.getElementById('player1');
    this.iconTwo = document.getElementById('player2');
    // call fetchPokemon method to API
    this.pokeService.fetchPokemon();
    // this.iconOne.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.iconOne + '.png');
    // subscription to call getPokemon method for name list data
    this.subscription = this.pokeService.pokeSubject.subscribe(
      (params) => {
        this.pokeList = this.pokeService.getPokemon();
      }
    );

    this.activatedRoute.params.subscribe(
      () => {
        this.pokeList = this.pokeService.getPokemon();
      }
    );

      /*


      const pokeList = this.pokeService.getPokemon();
     console.log( pokeList );
     for ( x = 1; x <= 150; x++) {
      this.pokemon[x] = x;
      //pokeName[x] =
    }*/
  }
}
