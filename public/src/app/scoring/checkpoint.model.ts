export class Checkpoint {
    constructor(
        public name: string,
        public timeOut:string = '',
        public timeIn:string = '',
        public timeTrue:any = '',
        public timeActual:string = '',
        public timeError:any = '',
        public points: number = 0
    ) {}
}