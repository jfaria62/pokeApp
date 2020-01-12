import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pokemon} from './pokemon';

import 'rxjs/add/operator/toPromise';
import 'rxjs/operators/map';
import {  } from '@angular/common/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {
  // base urls to access PokeAPI stuff
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // HttpClient request in PokeAPIService constructor
  constructor(private http: HttpClient) { }

  // GET pokemon information offset: number, limit: number
  getPokemon() {
    return this.http.get<Pokemon>('${this.baseUrl}' + 'pokemon/ditto');
    /*.toPromise()
    .then(items => items.isPrototypeOf((item, idx) => {
      const id: number = idx + offset + 1;

      return{
        name: item.name,
        sprite: '${this.baseSpriteUrl}${id}.png',
        id
      };
    }));*/
  }
}
