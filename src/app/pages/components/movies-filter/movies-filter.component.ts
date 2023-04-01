import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";

declare var $: any;
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit, AfterViewInit {
  myForm: FormGroup = this.fbuilder.group({
    moviesFilter: new FormControl('', Validators.required)
  })
  dateArray: Date[] = []
  moviesName: string[] = []
  hoursArray: string[] = []
  
  get formats(){
    return this._landingservice.formats
  }

  get hours(){
    return this._landingservice.hours
  }

  constructor(public _landingservice:LandingPageService,
   private fbuilder:FormBuilder){}

  ngOnInit(): void {
    $(document).ready(function () {
      $('select').formSelect();
    })
    this.generateArrayDate()
    this.getBillboardMoviesName()
  }



  ngAfterViewInit(){
    $('select').formSelect();
  }

  generateArrayDate() {
    let date: Date = new Date()
    this.dateArray.push(new Date(date))
    for (let i = 0; i < 7; i++) {
      date.setDate(date.getDate() + 1)
      this.dateArray.push(new Date(date))
    }
  }

  getBillboardMoviesName(){
    this._landingservice.getMovies().subscribe(movies => {
      this.moviesName = movies.filter(movie => !movie.cartelera).map(movie =>  movie.nombre )
      // jquery y sus vergeras de usar librerias externas en angular por eso se genera esta linea
      // para cargar los datos de moviesName
    })
  }


  


}
