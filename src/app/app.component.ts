import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from './poke-api.service';
import {Pokemon} from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApp';
  pokemon: Pokemon[] = [];
  isLoading = false;
  error = false;

  constructor(private pokeService: PokeAPIService) {
    this.pokeService = pokeService;
  }

  ngOnInit() {
  }
}
