import {Component, Input, OnInit} from '@angular/core';
import {Checkpoint} from "../../models/checkpoint.model";


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
        if(total)
        	return total;
        else
        	return 'No Score';
    }

}
