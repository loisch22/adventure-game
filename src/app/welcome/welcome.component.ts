import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]

})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(charName: string) {
    this.router.navigate(['room-one', charName]);
      console.log(newChar.name);
  }
}


//Use an emitter to send character name to other components 
