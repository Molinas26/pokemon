import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { 
    console.log('El servicio HTTP esta activado')
   }

   getPoke(): any {
     this.http.get('http://pokeapi.co/').subscribe(data => {
      console.log(data);
    });
    console.log("Esto se ejecutará antes que el console log de arriba");
   }
}
