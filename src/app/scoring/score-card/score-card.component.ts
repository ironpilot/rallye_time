import {Component, OnInit} from '@angular/core';
import {Checkpoint} from '../checkpoint.model';
import {ScoreCardService} from "../score-card.service";

@Component({
    selector: 'app-score-card',
    templateUrl: './score-card.component.html',
    styleUrls: ['./score-card.component.css'],
    providers: [ScoreCardService]
})
export class ScoreCardComponent implements OnInit {
    checkpoints: Checkpoint[];

    constructor(private scoreCardService: ScoreCardService) {}

    onAddCheckpoint(checkPointField) {
        this.scoreCardService.addCheckpoint(checkPointField.value);
        checkPointField.value = '';
    }

    ngOnInit() {
        this.checkpoints = this.scoreCardService.scoreCard.checkpoints;
    }

}
