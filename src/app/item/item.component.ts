import { Component, OnInit, Input } from '@angular/core';
import {PokeAPIService} from '../poke-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pokemon;
  pokeService: PokeAPIService;

  constructor(pokeService: PokeAPIService) {
    this.pokeService = pokeService;
   }

  ngOnInit() {

  }

  iChooseYou(chosen) {

  }

}
