import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {ScoreCardComponent} from "./scoring/score-card/score-card.component";
import {AuthGuard} from "./auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'account', canActivate: [AuthGuard], component: AccountComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'leaderboard', component: LeaderboardComponent},
	{ path: 'score-card', canActivate: [AuthGuard], component: ScoreCardComponent},
	{ path: '**', redirectTo: '/'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {

}
