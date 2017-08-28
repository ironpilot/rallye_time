import {Checkpoint} from "./checkpoint.model";
import {ScoreCard} from "./score-card.model";

export class ScoreCardService {
    public scoreCard: ScoreCard = {
        checkpoints: [
            new Checkpoint('Checkpoint 1'),
            new Checkpoint('Checkpoint 2'),
        ]
    };

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
}