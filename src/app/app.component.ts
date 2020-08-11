import { Component, OnInit, Output } from '@angular/core';
import { PokeAPIService } from './poke-api.service';
import {Pokemon} from './model/pokemon';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApp';
  pokemonList: Pokemon[];

  activatedRoute: ActivatedRoute;
  pokeService: PokeAPIService;
  values = '';
  onKey(event: any) {
    this.values += event.target.values + ' | ';
  }

  constructor(activatedRoute: ActivatedRoute, pokeService: PokeAPIService) {
    this.pokeService = pokeService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    /*this.activatedRoute.params.subscribe(
      (params) => {
        this.pokemons = this.pokeService.getPokemon();
      }
    )
*/}
}
