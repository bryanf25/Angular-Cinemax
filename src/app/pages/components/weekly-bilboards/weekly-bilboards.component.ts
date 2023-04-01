import { Component, OnInit } from '@angular/core';
import { faHeart, faStar, faLanguage, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LandingPageService } from 'src/app/services/landing-page.service';
import { Movie } from 'src/app/interfaces/movie.interface';
import { tap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


declare var $: any;

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {
  faHeart = faHeart;
  faStar = faStar;
  faLanguage = faLanguage;
  faYoutube = faYoutube;
  faShareNodes = faShareNodes;

  imgUrl: string = '../../../../assets/imagenes/posters/';

  arrayWeeklyImg: string[] = [
    'BatmanVSSuperman',
    'cowboys_aliens',
    'gernika',
    'guardians-galaxy',
    'mostruos_vs_alienigenas',
  ]
  arrayPremiersImg: string[] = [
    'pacific-rim',
    'RogueOneP',
    'stars',
    'the_mummy',
    'venom',
  ]

  public arrayMovies: Movie[] = []
  public arrayweekly: Movie[] = []
  public arraypremiers: Movie[] = []

  selectedVideoUrl!: SafeResourceUrl;
  // arrayweekly: string[] = this.getImageUrls(this.arrayWeeklyImg);
  // arraypremiers: string[] = this.getImageUrls(this.arrayPremiersImg);

  constructor(public _landingservice: LandingPageService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.modal').modal();
    });
    this.geAllMovies()

  }

  updateSelectedUrl(url: string) {
    url = url.replace('watch?v=', 'embed/')
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`)
  }

  geAllMovies() {
    this._landingservice.getMovies().pipe(
      tap(movies => {
        this.arrayMovies = movies;
        this.getBillboardMovies();
        this.getPremierMovies();
      })
    ).subscribe();
  }

  getBillboardMovies() {
    this.arrayweekly = this.arrayMovies.filter(movie => !movie.cartelera)
  }

  getPremierMovies() {
    this.arraypremiers = this.arrayMovies.filter(movie => movie.cartelera)
  }



}
