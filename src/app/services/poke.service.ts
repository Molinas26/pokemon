import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){}

  getpolemon(index: number){
    return this.http.get<any>(this.baseUrl+'/pokemon/'+index);
  }
}
