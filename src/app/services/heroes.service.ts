import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import "rxjs/Rx";
import { Heroe } from "../interfaces/heroe.interface";

@Injectable ()
export class HeroesService {
  
  urlHeroes : string = "https://poli-voto.firebaseio.com/heroes.json";
  heroeUrl : string = "https://poli-voto.firebaseio.com/heroes";
  
  constructor ( private http : Http ) {
  }
  
  nuevoHeroe ( heroe : Heroe ) {
    let body = JSON.stringify ( heroe );
    let headers = new Headers ( {
      "Content-Type": "application/json"
    } );
    return this.http.post ( this.urlHeroes, body, { headers } )
      .map ( res => {
        console.log ( res.json () );
        return res.json ();
      } );
  }
  
  actaulizarHeroe ( heroe : Heroe, key$ : string ) {
    let body = JSON.stringify ( heroe );
    let headers = new Headers ( {
      "Content-Type": "application/json"
    } );
    
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.put ( url, body, { headers } )
      .map ( res => {
        console.log ( res.json () );
        return res.json ();
      } );
  }
  
  getHeroe ( key$ : string ) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get ( url )
      .map ( res => res.json () );
  }
  
  getHeroes () {
    return this.http.get ( this.urlHeroes )
      .map ( res => res.json () );
  }
  
  eliminarHeroe ( key$ : string ) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete ( url )
      .map ( res => res.json () );
  }
  
}
