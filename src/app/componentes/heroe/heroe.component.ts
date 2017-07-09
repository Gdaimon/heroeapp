import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";

@Component ( {
  selector   : "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls  : [ "./heroe.component.css" ]
} )
export class HeroeComponent implements OnInit {
  
  heroe : Heroe = {
    nombre: "",
    bio   : "",
    casa  : "Marvel"
  };
  nuevo : boolean = false;
  id : string;
  
  constructor ( private _heroesServices : HeroesService,
                private router : Router,
                private route : ActivatedRoute ) {
    
    this.route.params
      .subscribe ( parametro => {
        // console.log ( "Este es el parametro enviado", parametro );
        this.id = parametro[ "id" ];
        if ( this.id !== "nuevo" ) {
          this._heroesServices.getHeroe ( this.id )
            .subscribe ( heroe => this.heroe = heroe );
        }
      } );
  }
  
  ngOnInit () {
  }
  
  guardar () {
    console.log ( this.heroe );
    
    if ( this.id == "nuevo" ) {
      // Insertando
      this._heroesServices.nuevoHeroe ( this.heroe )
        .subscribe ( data => {
            this.router.navigate ( [ "/heroe", data.name ] );
            console.log ( data.name );
          },
          error => console.log ( error ) );
    } else {
      // Actualizando
      this._heroesServices.actaulizarHeroe ( this.heroe, this.id )
        .subscribe ( data => {
            console.log ( data );
          },
          error => console.log ( error ) );
    }
  }
  
  agregarNuevo ( forma : NgForm ) {
    this.router.navigate ( [ "/heroe", "nuevo" ] );
    forma.reset ( {
      casa: "Marvel"
    } );
  }
  
  
}
