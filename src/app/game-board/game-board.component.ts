import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../poke-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  pokeList = [];
  pokeService: PokeAPIService;
  activatedRoute: ActivatedRoute;
  subscription;

  constructor(activatedRoute: ActivatedRoute, pokeService: PokeAPIService) {
    this.activatedRoute = activatedRoute;
    this.pokeService = pokeService;
  }

  ngOnInit() {
    const pic = document.getElementById('A1');
    //pic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3'  + '.png');

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
  }

  selectBox(side) {
    this.pokeService.getPokemon();
  }
}
