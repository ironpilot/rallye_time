import {Checkpoint} from './checkpoint.model';

export class Car {
	constructor(public id: number,
				public raceId: number,
				public driver: string,
				public navigator: string,
				public number: string,
				private courseSections: Checkpoint[]) {
	}
}
