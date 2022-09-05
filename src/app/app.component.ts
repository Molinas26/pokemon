import { PokeService } from './services/poke.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemon';

  constructor(private pokeservicee: PokeService){
    console.log("Se ha iniciado el proceso");
  }

  ngOnInit(): void {
    console.log("OnInit funciona bien");
    this.pokeservicee.getPoke();
  }

}

