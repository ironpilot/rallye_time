import {Component, Input, OnInit} from '@angular/core';
import {Checkpoint} from "../checkpoint.model";


@Component({
    selector: 'app-score-total',
    templateUrl: './score-total.component.html',
    styleUrls: ['./score-total.component.css']
})
export class ScoreTotalComponent implements OnInit {
    @Input() checkpoints: Checkpoint[];

    constructor() {}

    ngOnInit() {
    }

    getTotal() {
        let total = 0;
        this.checkpoints.forEach((element) => {
            total += element.points;
        });
        return total;
    }

}
