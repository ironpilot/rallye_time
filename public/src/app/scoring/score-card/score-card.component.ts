import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-score-card',
    templateUrl: './score-card.component.html',
    styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
    checkpoints = [0, 0];

    constructor() {
    }

    getTotal() {
        let total = 0;
        this.checkpoints.forEach((element) => {
            total += element;
        });
        return total;
    }

    ngOnInit() {
    }

}
