import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { LogService } from './log.service';
import { Pokemon } from './model/pokemon';

@Injectable()
export class PokeAPIService {
  // base urls to access PokeAPI stuff
  private baseUrl = 'https://pokeapi.co/api/v2/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private pokeList = [];

  private logService: LogService;
  pokeSubject = new Subject<void>();
  httpClient: HttpClient;
  private playerOne: number;
  private playerTwo: number;
  sendData$: Observable<any>;


  // HttpClient request in PokeAPIService constructor
  constructor(logService: LogService, private http: HttpClient) {
    this.logService = logService;
    this.http = http;
    this.sendData$ = this.pokeSubject.asObservable();
  }

  getNumberOne() {
    console.log(this.playerOne);
    return this.playerOne;
  }


  getNumberTwo() {
    return this.playerTwo;
  }

  setNumber(name, player) {
    // find the position of the character chosen in pokeList
    const pos = this.pokeList.findIndex((char) => {
      return char.name === name;
    });
    // find which player chose the character and assign character number
    if (player === 1) {
      this.playerOne = pos + 1;
    } else {
      this.playerTwo = pos + 1;
    }
    // return data to subscribers
    this.pokeSubject.next();
  }

  // Call API for data and set pokeList
  fetchPokemon() {
    // returns observable Pokemon object
    this.http.get<Pokemon>(this.baseUrl + 'pokemon?limit=250').subscribe(
      (data) => {
        const extractedChars = data.results;
        const chars = extractedChars.map((char) => {
          return { name: char.name, url: char.url };
        });

        this.pokeList = chars;
        this.pokeSubject.next();
      });
  }

  getPokemon() {
      return this.pokeList;
  }
  /*
  getSprite(pokeID: string) {
    return this.http.get<string>(this.baseSpriteUrl + '.png');
  }*/

  /*getEvolutions() {
    return this.http.get(this.baseUrl + )
  }*/
}
