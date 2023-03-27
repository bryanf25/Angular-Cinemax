import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  baseUrl: string = "../../../../assets/imagenes/promociones/"
  arrayPromotions: string[] = [
    '1.png',
    '2.jpeg',
    '3.jpg',
    '4.png',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
  ]

  PromotionsUrl :string[] = this.getImageUrls()



  ngOnInit(): void {
    $(document).ready(function () {
      $('.carousel').carousel();
    });
  }

  getImageUrls() :string[]{
    return this.arrayPromotions.map(name =>  this.baseUrl + name );
  }

}
