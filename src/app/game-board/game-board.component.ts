import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from './poke-api.service';
import { PokeAPIService } from '../poke-api.service';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  PokeService: PokeAPIService;

  constructor() { }

  ngOnInit() {
  }

  selectBox(side){
    this.PokeService.getPokemon(side);
  }
}
