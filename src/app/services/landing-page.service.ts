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


  constructor(private httpservice : HttpClient) { }

  getSocialNetwork(): Observable<SocialNetwork[]>{
    return this.httpservice.get<SocialNetwork[]>(`${enviroment.urlBase}RedesSociales.json`)
  }

  getMovies(): Observable<Movie[]>{
    return this.httpservice.get<Movie[]>(`${enviroment.urlBase}peliculas.json`)

  }
}
