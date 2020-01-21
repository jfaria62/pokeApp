import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pokemon} from './pokemon';

// import 'rxjs/add/operator/toPromise';
import {map} from 'rxjs/operators';
// import {  } from '@angular/common/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {
  // base urls to access PokeAPI stuff
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  // HttpClient request in PokeAPIService constructor
  constructor(private http: HttpClient) { }

  getSprite() {
    return this.http.get<string>(this.baseSpriteUrl + '4.png');
  }
  // GET pokemon information offset: number, limit: number
  getPokemon() {
    return this.http.get<string>( this.baseUrl + 'pokemon/charmander');

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
