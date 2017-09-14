import {Checkpoint} from './checkpoint.model';
import {ScoreCard} from './score-card.model';

export class RaceModel {
	public scoreCards: ScoreCard[];

	constructor(public id: number,
				public name: string,
				public checkpoints: Checkpoint[],
				public accessCode: string) {
	}
}
