import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import class pokemon;

@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {
  // base urls to access PokeAPI stuff
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // HttpClient request in PokeAPIService constructor
  constructor(private http: HttpClient) { }

  // GET pokemon information
  getPokemon(offset: number, limit: number) {
    return this.http.get('${this.baseUrl}?offset=${offset}&limit=${limit}')

    .toPromise()
    .then(items => map((item, idx) => {
      const id: number = idx + offset + 1;

      return{
        name: item.name,
        sprite: '${this.baseSpriteUrl}${id}.png',
        id
      };
    }));
  }
}
