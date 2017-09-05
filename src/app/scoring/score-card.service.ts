import {Checkpoint} from "./checkpoint.model";
import {ScoreCard} from "./score-card.model";
import {Injectable} from "@angular/core";
import {RaceService} from "../race.service";

@Injectable()
export class ScoreCardService {
    public scoreCard: ScoreCard;

    constructor(private raceService: RaceService){}

    getCheckpoints() {
        return this.scoreCard.checkpoints.slice();
    }

    addCheckpoint(checkpointName) {
        if(checkpointName.length >= 1) {
            this.scoreCard.checkpoints.push(
                new Checkpoint(checkpointName)
            );
        }
    }

    removeCheckpoint(checkpoint) {
        let index = this.scoreCard.checkpoints.findIndex((element) => {
            return element === checkpoint;
        });
        this.scoreCard.checkpoints.splice(index, 1);
    }

    setupRace(car:String, driver: String, navigator: String, raceId: Number) {
        console.log(this.raceService.getCheckpointsForRace(raceId));
        this.scoreCard = new ScoreCard(
            this.raceService.getCheckpointsForRace(raceId),
            car,
            driver,
            navigator,
            raceId
        );
    }

    hasRace() {
        return (this.scoreCard.raceId > 0);
    }
}