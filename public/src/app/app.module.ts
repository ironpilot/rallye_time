import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { ScoreCardComponent } from './scoring/score-card/score-card.component';
import { ScoreBlockComponent } from './scoring/score-block/score-block.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        ScoreCardComponent,
        ScoreBlockComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
