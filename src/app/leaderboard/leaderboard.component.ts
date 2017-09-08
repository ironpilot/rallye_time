import {Component, ElementRef, OnInit} from '@angular/core';
import {RaceService} from "../race.service";
import {RaceModel} from "../race.model";

@Component({
	selector: 'app-leaderboard',
	templateUrl: './leaderboard.component.html',
	styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
	racers: RaceModel;

	constructor(private raceService:RaceService) {
	}

	ngOnInit() {
	}

	onSelectRace(raceId: ElementRef) {
		this.racers = this.raceService.getRaceById(+raceId.nativeElement.value);
	}

}
