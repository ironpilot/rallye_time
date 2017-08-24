import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-score-block',
    templateUrl: './score-block.component.html',
    styleUrls: ['./score-block.component.css']
})
export class ScoreBlockComponent implements OnInit {
    timeOut:string = '';
    timeIn:string = '';
    timeTrue:any;
    timeActual:string = '';
    timeError:any;
    points:number = 0;

    constructor() {
    }

    onUpdateTrueTime() {
        if(this.timeIn != '' && this.timeOut != '') {
            let timeOut = moment(this.timeOut, 'HH:mm:ss');
            let timeIn = moment(this.timeIn, 'HH:mm:ss');
            let diff = timeIn.diff(timeOut, 'seconds');
            let hours = Math.floor(diff / 3600);
            let minutes = Math.floor((diff % 3600) / 60);
            let seconds = diff % 60;
            this.timeTrue = moment(hours + ':' + minutes + ':' + seconds, 'H:m:s');
        }
    }

    onUpdateErrorTime() {
        if(this.timeActual != '' && this.timeTrue instanceof moment) {
            let diff = Math.abs(this.timeTrue.diff(moment(this.timeActual, 'HH:mm:ss'),'seconds'));
            console.log(this.timeTrue, moment(this.timeActual, 'HH:mm:ss'), diff);
            if(diff > 300) {
                this.points = 300;
            } else {
                this.points = diff;
            }
            let hours = Math.floor(diff / 3600);
            let minutes = Math.floor((diff % 3600) / 60);
            let seconds = diff % 60;
            this.timeError = moment(hours + ':' + minutes + ':' + seconds, 'H:m:s');
        }
    }

    getTrueTime() {
        return this.timeTrue instanceof moment ? this.timeTrue.format('H:mm:ss') : null
    }

    getErrorTime() {
        return this.timeError instanceof moment ? this.timeError.format('H:mm:ss') : null
    }

    ngOnInit() {
    }

}
