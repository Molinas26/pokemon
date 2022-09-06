import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any[] = [];

  constructor(private pokeservice: PokeService, private activateRouter:ActivatedRoute) {
    this.activateRouter.params.subscribe(
      params =>{
        this.getPokemon(params['id']);
      }
    )
   }

  ngOnInit(): void {
  }
  getPokemon(id: number){
    let info;
      this.pokeservice.getpolemon(id).subscribe(res => {
        info = {
          name: res.name,
          position: res.id,
          image1: res.sprites.front_default,
          image2: res.sprites.back_default,
          weight: res.weight,
          height: res.height,
          type0: res.types[0].type.name,
        }
        this.data.push(info);
        console.log(res)
      })
    }
}
