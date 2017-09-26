import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { playerCharacter } from './player';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayer() {
    return playerCharacter;
  }

}
