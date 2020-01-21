import { Component, OnInit, Output } from '@angular/core';
import { PokeAPIService } from './poke-api.service';
import {Pokemon} from './pokemon';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApp';
  pokemon: Pokemon;
  ditto: Observable<string>;
  isLoading = false;
  error = false;
  pokeService: PokeAPIService;

  constructor(pokeService: PokeAPIService) {
    this.pokeService = pokeService;
  }

  ngOnInit() {
    //this.ditto = this.pokeService.getPokemon();
    this.ditto = this.pokeService.getSprite();

    console.log("LOOK HERE" + this.pokeService.getSprite());
    const pic = document.getElementById('charm');
    pic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png');
  }
}
