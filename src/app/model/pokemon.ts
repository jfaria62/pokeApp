import { Forms } from './forms';
import { Moves } from './moves';
import { Sprite } from './sprite';

export class Pokemon {
  name: string;
  id: number;
  sprite: string;
  types = [];
  stats = [];
  sprites: Sprite[] = [];
  imageUrl: string;

  get imageURL() {
    return 'https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png';
  }
  /*
  forms: Forms [];
  moves: Moves [];
  height: number;
  weight: number;
*/
}
