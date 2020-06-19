import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pokemon} from './model/pokemon';
// import {map} from 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import {map, catchError} from 'rxjs/operators';
// import {  } from '@angular/common/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PokeAPIService {
  // base urls to access PokeAPI stuff
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // HttpClient request in PokeAPIService constructor
  constructor(private http: HttpClient) { }

  // GET pokemon information offset
  getPokemon() {
    const obj = this.http.get(this.baseUrl + 'pokedex/1/').pipe(map(pkm => pkm.toString()));
    return obj;
    /*.toPromise()
      .then((res: any) => {
        let pokemons: Pokemon[] = [];
        let reducePokeEntries = JSON.parse(res._body).pokemon_entries.splice(0, 50);

        reducePokeEntries.forEach(element => {
          let pokemon = new Pokemon();
          pokemon.name = element.pokemon_species.name;
          pokemon.id = element.entry_number;

          pokemons.push(pokemon);
        });
        console.log('Pokemons: ' + pokemons);
        return pokemons;
      });
      */
    // return this.http.get( this.baseUrl + 'pokemon/' + pokename).pipe(
    //  map(this.extractData));


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

  getSprite(pokeID: string) {
    return this.http.get<string>(this.baseSpriteUrl + '.png');
  }

  /*getEvolutions() {
    return this.http.get(this.baseUrl + )
  }*/
}
