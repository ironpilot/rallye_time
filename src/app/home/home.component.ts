import {Component, OnInit} from '@angular/core';
import {ScoreCardService} from "../scoring/score-card.service";
import {Router} from "@angular/router";
import {RaceService} from "../race.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    car: String = '';
    driver: String = '';
    navigator: String = '';
    race: Number = 1;
    accessCode: String = '';

    constructor(
        private scoreCardService: ScoreCardService,
        private router: Router,
        public raceService: RaceService
    ) {}

    ngOnInit() {
    }

    onStartRace() {
    	if(this.raceService.verifyAccessCode(this.race, this.accessCode)) {
			this.scoreCardService.setupRace(
				this.car,
				this.driver,
				this.navigator,
				this.race
			);

			this.router.navigate(['score-card']);
		} else {
    		console.log('Failed Verification');
    		//@todo show an error message
		}
    }
}
