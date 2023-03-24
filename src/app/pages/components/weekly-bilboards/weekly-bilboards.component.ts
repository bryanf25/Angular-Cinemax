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
  
  arrayImg: string[] = [
    'BatmanVSSuperman',
    'cowboys_aliens',
    'gernika',
    'guardians-galaxy',
    'mostruos_vs_alienigenas',
    'pacific-rim',
    'RogueOneP',
    'stars',
    'the_mummy',
    'venom',
  ]

  arrayweekly: string[] = this.getImageUrls();

getImageUrls() :string[]{
  return this.arrayImg.map(name =>  this.imgUrl + name + '.jpg');
}

}
