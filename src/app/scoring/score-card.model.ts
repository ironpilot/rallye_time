import {Checkpoint} from "./checkpoint.model";

export class ScoreCard {
    constructor(
        public checkpoints: Checkpoint[],
        public car: String = '',
        public driver: String = '',
        public navigator: String = '',
        public raceId: Number = 0
    ) {}
}