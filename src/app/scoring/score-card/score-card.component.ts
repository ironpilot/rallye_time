import {Component, OnInit} from '@angular/core';
import {Checkpoint} from '../../models/checkpoint.model';
import {ScoreCardService} from '../score-card.service';
import {RaceService} from '../../services/race.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-score-card',
	templateUrl: './score-card.component.html',
	styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
	checkpoints: Checkpoint[];
	raceName: String;

	constructor(public scoreCardService: ScoreCardService,
				public raceService: RaceService,
				private router: Router) {
	}

	onAddCheckpoint(checkPointField) {
		this.scoreCardService.addCheckpoint(checkPointField.value);
		checkPointField.value = '';
	}

	ngOnInit() {
		console.log('Initialized');
		this.checkpoints = this.scoreCardService.scoreCard.checkpoints;
		if (!this.scoreCardService.hasRace()) {
			this.router.navigate(['/']);
		} else {
			this.raceName = this.raceService.getRaceById(this.scoreCardService.scoreCard.raceId).name;
		}
	}

}
