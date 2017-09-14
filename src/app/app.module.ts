import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ScoreCardComponent} from './scoring/score-card/score-card.component';
import {ScoreBlockComponent} from './scoring/score-block/score-block.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ScoreTotalComponent} from './scoring/score-total/score-total.component';
import {HomeComponent} from './home/home.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {RaceService} from './services/race.service';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {LoginComponent} from './login/login.component';
import {RaceComponent} from './race/race.component';
import {AccountComponent} from './account/account.component';
import {ForgotComponent} from './login/forgot/forgot.component';
import {CarService} from './services/car.service';

@NgModule({
	declarations: [
		AppComponent,
		ScoreCardComponent,
		ScoreBlockComponent,
		NavBarComponent,
		ScoreTotalComponent,
		HomeComponent,
		LeaderboardComponent,
		LoginComponent,
		RaceComponent,
		AccountComponent,
		ForgotComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [CarService, RaceService, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {
}
