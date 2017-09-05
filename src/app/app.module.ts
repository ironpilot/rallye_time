import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ScoreCardComponent} from './scoring/score-card/score-card.component';
import {ScoreBlockComponent} from './scoring/score-block/score-block.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ScoreTotalComponent} from './scoring/score-total/score-total.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {RaceService} from "./race.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'leaderboard', component: LeaderboardComponent},
    { path: 'score-card', component: ScoreCardComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ScoreCardComponent,
        ScoreBlockComponent,
        NavBarComponent,
        ScoreTotalComponent,
        HomeComponent,
        LeaderboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [RaceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
