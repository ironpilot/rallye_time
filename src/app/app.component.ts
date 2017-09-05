import {Component} from '@angular/core';
import {ScoreCardService} from "./scoring/score-card.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ScoreCardService]
})
export class AppComponent {
    title = 'app';
}
