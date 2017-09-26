import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-room-one',
  templateUrl: './room-one.component.html',
  styleUrls: ['./room-one.component.css'],
  providers: [PlayerService]
})
export class RoomOneComponent implements OnInit {
  charName: string = "";

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      
      this.playerService.getPlayer().name = charName;

      this.charName = this.playerService.getPlayer().name;
    });
  }


}
