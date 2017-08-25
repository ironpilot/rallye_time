import {Component, OnInit} from '@angular/core';
import {Checkpoint} from '../checkpoint.model';

@Component({
    selector: 'app-score-card',
    templateUrl: './score-card.component.html',
    styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
    newCheckpointName:string = '';
    checkpoints: Checkpoint[] = [
        new Checkpoint('Checkpoint 1'),
        new Checkpoint('Checkpoint 2'),
    ];

    constructor() {
    }

    getTotal() {
        let total = 0;
        this.checkpoints.forEach((element) => {
            total += element.points;
        });
        return total;
    }

    onAddCheckpoint() {
        if(this.newCheckpointName.length >= 1) {
            this.checkpoints.push(
                new Checkpoint(this.newCheckpointName)
            );
            this.newCheckpointName = '';
        }
    }

    onRemoveCheckpoint(checkpoint) {
        let index = this.checkpoints.findIndex((element) => {
            return element === checkpoint;
        });
        this.checkpoints.splice(index, 1);
    }

    ngOnInit() {
    }

}
