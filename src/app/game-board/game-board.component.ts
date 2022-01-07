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

  // determine if the last move was a winner
  checkWinner(cardPic) {
   console.log(`checking win..`);

   if (this.playerCard[0][0] === this.turn && this.playerCard[0][1] === this.turn && this.playerCard[0][2] === this.turn) {
     console.log(`Player ${this.turn} Wins!!!`);

     this.turnText.innerText = `Player ${this.turn} Wins!!!`;
   } else if (this.playerCard[1][0] === this.turn && this.playerCard[1][1] === this.turn && this.playerCard[1][2] === this.turn) {
    console.log(`Player ${this.turn} Wins!!!`);
    this.turnText.innerText = `Player ${this.turn} Wins!!!`;
   } else if (this.playerCard[2][0] === this.turn && this.playerCard[2][1] === this.turn && this.playerCard[2][2] === this.turn) {
    console.log(`Player ${this.turn} Wins!!!`);
    this.turnText.innerText = `Player ${this.turn} Wins!!!`;
   } else if (this.playerCard[0][0] === this.turn && this.playerCard[1][1] === this.turn && this.playerCard[2][2] === this.turn) {
    console.log(`Player ${this.turn} Wins!!!`);
    this.turnText.innerText = `Player ${this.turn} Wins!!!`;
   } else if (this.playerCard[0][2] === this.turn && this.playerCard[1][1] === this.turn && this.playerCard[0][2] === this.turn) {
    console.log(`Player ${this.turn} Wins!!!`);
    this.turnText.innerText = `Player ${this.turn} Wins!!!`;
   }   else {
    if (this.turn === 1) {
      this.turn = 2;
      this.turnText.innerText = 'Player 2\'s Turn!';
    } else {
      this.turn = 1;
      this.turnText.innerText = 'Player 1\'s Turn!';
    }
   }
   // let winner = 0;
   // return winner;
  }


  // sets values for player's spots on board
  setCard(boxID) {
    let cardPic;
    switch (boxID) {
     case 'Q1':
       this.playerCard[0][0] = this.turn;
       cardPic = document.getElementById('A1');
       break;
     case 'Q2':
       this.playerCard[0][1] = this.turn;
       cardPic = document.getElementById('A2');
       break;
     case 'Q3':
       this.playerCard[0][2] = this.turn;
       cardPic = document.getElementById('A3');
       break;
     case  'W1':
       this.playerCard[1][0] = this.turn;
       cardPic = document.getElementById('B1');
       break;
     case  'W2':
       this.playerCard[1][1] = this.turn;
       cardPic = document.getElementById('B2');
       break;
     case 'W3':
       this.playerCard[1][2] = this.turn;
       cardPic = document.getElementById('B3');
       break;
     case 'E1':
       this.playerCard[2][0] = this.turn;
       cardPic = document.getElementById('C1');
       break;
     case 'E2':
       this.playerCard[2][1] = this.turn;
       cardPic = document.getElementById('C2');
       break;
     case 'E3':
       this.playerCard[2][2] = this.turn;
       cardPic = document.getElementById('C3');
       break;
     default:
       break;
    }
    if (this.turn === 1) {
      cardPic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + this.playerOne + '.png');
    } else {
      cardPic.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  + this.playerTwo + '.png');
    }
    console.log(this.playerCard);
    this.checkWinner(cardPic);
  }

 // set game card UI to selected player Icon
 selectBox(boxID) {
  this.playerOne = this.pokeService.getNumberOne();
  this.playerTwo = this.pokeService.getNumberTwo();
  // this.setCard(boxID);
  // check if box is already selected
  if (document.getElementById(boxID).children[0].attributes[2].value.substring(0, 5) !== 'https') {

    this.setCard(boxID);
  }
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
