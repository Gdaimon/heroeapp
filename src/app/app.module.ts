import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { APP_ROUTING } from "./app.routes";
import { HeroeComponent } from "./componentes/heroe/heroe.component";
import { HeroesComponent } from "./componentes/heroes/heroes.component";
import { HeroesService } from "./services/heroes.service";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule ( {
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers   : [ HeroesService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
