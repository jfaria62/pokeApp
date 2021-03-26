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
  playerOne: number;
  playerTwo: number;
  playerCard: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  turn;
  turnText;

  constructor(activatedRoute: ActivatedRoute, pokeService: PokeAPIService) {
    this.activatedRoute = activatedRoute;
    this.pokeService = pokeService;
  }
  /* TO DO:
    -- SET PLAYER TURN
    -- GET PLAYER CHAR
    -- DETERMINE WINNER
  */

 // determine if the last move was a winner
 checkWinner() {
   if ( this.turn === 1) {

   }

 }

 // sets values for player's spots on board
 setCard(boxID) {
  let cardPic;

  // search for selected boxID and set value to player who chose it
  if ( boxID === 'Q1') {
    this.playerCard[0][0] = this.turn;
    cardPic = document.getElementById('A1');
  }
  else if ( boxID === 'Q2') {
    this.playerCard[0][1] = this.turn;
    cardPic = document.getElementById('A2');
  }
  else if ( boxID === 'Q3') {
    this.playerCard[0][2] = this.turn;
    cardPic = document.getElementById('A3');
  }
  else if ( boxID === 'W1') {
    this.playerCard[1][0] = this.turn;
    cardPic = document.getElementById('B1');
  }
  else if ( boxID === 'W2') {
    this.playerCard[1][1] = this.turn;
    cardPic = document.getElementById('B2');
  }
  else if ( boxID === 'W3') {
    this.playerCard[1][2] = this.turn;
    cardPic = document.getElementById('B3');
  }
  else if ( boxID === 'E1') {
    this.playerCard[2][0] = this.turn;
    cardPic = document.getElementById('C1');
  }
  else if ( boxID === 'E2') {
    this.playerCard[2][1] = this.turn;
    cardPic = document.getElementById('C2');
  }
  else if ( boxID === 'E3') {
    this.playerCard[2][2] = this.turn;
    cardPic = document.getElementById('C3');
  }

  if (this.turn === 1) {
    cardPic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + this.playerOne + '.png');
    this.turn = 2;
    this.turnText.innerText = 'Player 2\'s Turn!';
  }
  else {
    cardPic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + this.playerTwo + '.png');
    this.turn = 1;
    this.turnText.innerText = 'Player 1\'s Turn!';
  }
}

 // set game card UI to selected player Icon
 selectBox(boxID) {
  this.playerOne = this.pokeService.getNumberOne();
  this.playerTwo = this.pokeService.getNumberTwo();
  // let pick = document.getElementById(boxID);
  // pick.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + this.playerOne + '.png');
  this.setCard(boxID);
  this.checkWinner(boxID);

}
  ngOnInit() {
    this.turn = 1;
    this.turnText = document.getElementById('turn');
    this.turnText.textContent = 'Player 1\'s Turn!';
    // const pic = document.getElementById('A1');
    // pic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3'  + '.png');


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
}
