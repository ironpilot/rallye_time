import {Checkpoint} from "./scoring/checkpoint.model";
import {RaceModel} from "./race.model";

export class RaceService {
    private availableRaces: RaceModel[] = [
        new RaceModel(1, 'Wine\'d Up the Old Rig Rallye', [
            	new Checkpoint('Checkpoint 1'),
            	new Checkpoint('Checkpoint 2'),
            	new Checkpoint('Checkpoint 3'),
            	new Checkpoint('Checkpoint 4')
        	],
			'RallyesAreFun'
		),
		new RaceModel(2, 'Give a Hoot, Follow the Roote (Route)', [
            	new Checkpoint('Checkpoint 1'),
            	new Checkpoint('Checkpoint 2'),
            	new Checkpoint('Checkpoint 3'),
            	new Checkpoint('Checkpoint 4')
        	],
			'OwlsDoNotRace'
		)
    ];

    getAvailableRaces() {
        return this.availableRaces;
    }

    getRaceById(id) {
        return this.availableRaces.find((element) => {
            return element.id == id;
        })
    }

    getCheckpointsForRace(id) {
        return this.availableRaces[this.availableRaces.findIndex((element) => {
            return element.id == id;
        })].checkpoints;
    }

	verifyAccessCode(raceId: Number, accessCode: String) {
    	const race = this.getRaceById(raceId);
    	return race.accessCode === accessCode;
	}
}
