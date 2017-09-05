import {Checkpoint} from "./scoring/checkpoint.model";

export class RaceService {
    private availableRaces = [
        {id: 1, name: 'Wine\'d Up the Old Rig Rallye', checkpoints: [
            new Checkpoint('Checkpoint 1'),
            new Checkpoint('Checkpoint 2'),
            new Checkpoint('Checkpoint 3'),
            new Checkpoint('Checkpoint 4')
        ]},
        {id: 2, name: 'Give a Hoot, Follow the Roote (Route)', checkpoints: [
            new Checkpoint('Checkpoint 1'),
            new Checkpoint('Checkpoint 2'),
            new Checkpoint('Checkpoint 3'),
            new Checkpoint('Checkpoint 4')
        ]}
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
}