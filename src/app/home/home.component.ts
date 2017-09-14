import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoreCardService} from '../scoring/score-card.service';
import {Router} from '@angular/router';
import {RaceService} from '../services/race.service';
import {NgForm} from '@angular/forms';
import {CarService} from '../services/car.service';
import {Car} from '../models/car.model';

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

	constructor(private scoreCardService: ScoreCardService,
				private router: Router,
				public raceService: RaceService,
				public carService: CarService) {
	}

	ngOnInit() {
	}

	onStartRace() {
		this.carService.addCar(new Car(
			null,
			1,
			this.startForm.value.driver,
			this.startForm.value.navigator,
			this.startForm.value.carNumber,
			this.startForm.value.raceSelect
		)).subscribe((response) => {
			this.router.navigate(['score-card']);
		},
			(error) => {
				// @todo show an error message
		});
		/*if (this.raceService.verifyAccessCode(this.startForm.value.raceSelect, this.startForm.value.accessCode)) {
			this.scoreCardService.setupRace(

			);


		} else {
			console.log('Failed Verification');

		}*/
	}
}
