/**
 * Created by darkklitos on 12/04/17.
 */
import { RouterModule, Routes } from "@angular/router";
import { HeroeComponent } from "./componentes/heroe/heroe.component";
import { HeroesComponent } from "./componentes/heroes/heroes.component";

const ROUTES : Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "**", pathMatch: "full", redirectTo: "heroes" },
];

export const APP_ROUTING = RouterModule.forRoot ( ROUTES );
