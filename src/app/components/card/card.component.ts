import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  data: any[] = [];




  constructor(private pokeservice: PokeService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    let info;
    for (let index = 1; index < 150; index++) {

      this.pokeservice.getpolemon(index).subscribe(res => {
        info = {
          name: res.name,
          position: res.id,
          image: res.sprites.front_default
        }
        this.data.push(info);
        console.log(res)
      })
    }
  }

}
