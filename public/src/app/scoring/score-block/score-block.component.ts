import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as moment from 'moment';
import {Checkpoint} from "../checkpoint.model";

@Component({
    selector: 'app-score-block',
    templateUrl: './score-block.component.html',
    styleUrls: ['./score-block.component.css']
})
export class ScoreBlockComponent implements OnInit {
    @Output() removeCheckpoint = new EventEmitter<Checkpoint>();
    @Input() checkpoint:Checkpoint;

    constructor() {
    }

    onUpdateTrueTime() {
        if(this.checkpoint.timeIn != '' && this.checkpoint.timeOut != '') {
            let timeOut = moment(this.checkpoint.timeOut, 'HH:mm:ss');
            let timeIn = moment(this.checkpoint.timeIn, 'HH:mm:ss');
            let diff = timeIn.diff(timeOut, 'seconds');
            let hours = Math.floor(diff / 3600);
            let minutes = Math.floor((diff % 3600) / 60);
            let seconds = diff % 60;
            this.checkpoint.timeTrue = moment(hours + ':' + minutes + ':' + seconds, 'H:m:s');
        }
    }

    onUpdateErrorTime() {
        if(this.checkpoint.timeActual != '' && this.checkpoint.timeTrue instanceof moment) {
            let diff = Math.abs(this.checkpoint.timeTrue.diff(moment(this.checkpoint.timeActual, 'HH:mm:ss'),'seconds'));
            console.log(this.checkpoint.timeTrue, moment(this.checkpoint.timeActual, 'HH:mm:ss'), diff);
            if(diff > 300) {
                this.checkpoint.points = 300;
            } else {
                this.checkpoint.points = diff;
            }
            let hours = Math.floor(diff / 3600);
            let minutes = Math.floor((diff % 3600) / 60);
            let seconds = diff % 60;
            this.checkpoint.timeError = moment(hours + ':' + minutes + ':' + seconds, 'H:m:s');
        }
    }

    onRemoveCheckpoint() {
        console.log('emitted');
        this.removeCheckpoint.emit(this.checkpoint);
    }

    getTrueTime() {
        return this.checkpoint.timeTrue instanceof moment ? this.checkpoint.timeTrue.format('H:mm:ss') : null
    }

    getErrorTime() {
        return this.checkpoint.timeError instanceof moment ? this.checkpoint.timeError.format('H:mm:ss') : null
    }

    ngOnInit() {
    }

}
