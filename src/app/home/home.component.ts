import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoreCardService} from "../scoring/score-card.service";
import {Router} from "@angular/router";
import {RaceService} from "../race.service";
import {NgForm} from "@angular/forms";

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
    @ViewChild('form') startForm: NgForm;

    constructor(
        private scoreCardService: ScoreCardService,
        private router: Router,
        public raceService: RaceService
    ) {}

    ngOnInit() {
    }

    onStartRace() {
    	if(this.raceService.verifyAccessCode(this.startForm.value.raceSelect, this.startForm.value.accessCode)) {
			this.scoreCardService.setupRace(
				this.startForm.value.carNumber,
				this.startForm.value.driver,
				this.startForm.value.navigator,
				this.startForm.value.raceSelect
			);

			this.router.navigate(['score-card']);
		} else {
    		console.log('Failed Verification');
    		//@todo show an error message
		}
	}
}
