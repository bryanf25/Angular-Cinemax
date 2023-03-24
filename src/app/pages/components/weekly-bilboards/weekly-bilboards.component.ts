import { Component, OnInit } from '@angular/core';
import { faHeart, faStar, faLanguage, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {

  ngOnInit(): void {
    
  }
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

  arrayweekly: string[] = this.getImageUrls(this.arrayWeeklyImg);
  arraypremiers: string[] = this.getImageUrls(this.arrayPremiersImg);
  

getImageUrls(array:string[]) :string[]{
  return array.map(name =>  this.imgUrl + name + '.jpg');
}

}
