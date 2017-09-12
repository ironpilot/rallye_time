import {Checkpoint} from "./checkpoint.model";
import {ScoreCard} from "./score-card.model";

export class RaceModel {
	public scoreCards: ScoreCard[];

	constructor(
		public id:Number,
		public name:String,
		public checkpoints:Checkpoint[],
		public accessCode:String
	) {};
}
