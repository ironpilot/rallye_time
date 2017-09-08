import * as moment from 'moment';

export class Checkpoint {
    constructor(
        public name: string,
        public timeOut?:string,
        public timeIn?:string,
        public timeTrue?:any,
        public timeActual?:string,
        public timeError?:any,
        public points?: number
    ) {}

    getTrueTime() {
        return this.timeTrue instanceof moment ? this.timeTrue.format('H:mm:ss') : null
    }

    getErrorTime() {
        return this.timeError instanceof moment ? this.timeError.format('H:mm:ss') : null
    }
}
