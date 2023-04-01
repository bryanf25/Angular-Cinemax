import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { SocialNetwork } from '../interfaces/social-network.interface';
import { enviroment } from 'enviroments/environmen';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  get formats(){
    return ['Doblada 2D','Doblada 3D','Original 2D','Original 3D']
  }

  get hours(){
    let hours : string[] = []
    for (let i = 2; i < 10; i = i+2) {
      let hour = `${i}:00pm`
      hours.push(hour)
    }
    return hours
  }
  
  constructor(private httpservice : HttpClient) { }

  getSocialNetwork(): Observable<SocialNetwork[]>{
    return this.httpservice.get<SocialNetwork[]>(`${enviroment.urlBase}RedesSociales.json`)
  }

  getMovies(): Observable<Movie[]>{
    return this.httpservice.get<Movie[]>(`${enviroment.urlBase}peliculas.json`)
  }



}
