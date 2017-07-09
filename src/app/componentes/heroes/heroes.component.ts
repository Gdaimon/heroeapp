import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";

@Component ( {
  selector   : "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls  : [ "./heroes.component.css" ]
} )
export class HeroesComponent implements OnInit {
  
  heroes : any[] = [];
  loading : boolean = true;
  
  constructor ( private _heroesServices : HeroesService ) {
  }
  
  ngOnInit () {
    this._heroesServices.getHeroes ()
      .subscribe ( data => {
        console.log ( data );
        this.heroes = data;
        this.loading = false;
      } );
  }
  
  borrarHeroe ( key$ : string ) {
    this._heroesServices.eliminarHeroe ( key$ )
      .subscribe ( response => {
        console.log ( response );
        if ( response ) {
          console.error ( response );
        } else {
          // Todo bien
          delete this.heroes[ key$ ];
        }
      } );
  }
  
}
