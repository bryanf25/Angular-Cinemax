import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightToBracket, faUserPlus, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SocialNetwork } from 'src/app/interfaces/social-network.interface';
import { LandingPageService } from 'src/app/services/landing-page.service';

@Component({
  selector: 'app-navbar-social',
  templateUrl: './navbar-social.component.html',
  styleUrls: ['./navbar-social.component.css']
})
export class NavbarSocialComponent implements OnInit {
  faCircleExclamation = faCircleExclamation;

  socialNetworkArray: SocialNetwork[] = [];

  constructor(public _landingService: LandingPageService) { }

  ngOnInit(): void {
    this.callServiceGet()
  }
  
  callServiceGet() {
    this._landingService.getSocialNetwork().subscribe(response => {
      this.socialNetworkArray = response
      this.getFaIcons()
    })
  }

  getFaIcons() {
    this.socialNetworkArray.map(element => {
      let icon: IconProp = this.generateIcon(element.nombre)
      element.icon = icon
    })
  }

  generateIcon(iconName: string): IconDefinition {
    switch (iconName) {
      case 'Facebook':
        return faFacebook;
      case 'Twitter':
        return faTwitter;
      case 'Youtube':
        return faYoutube;
      case 'Instagram':
        return faInstagram;
      case 'ArrowRightToBracket':
        return faArrowRightToBracket;
      case 'UserPlus':
        return faUserPlus;
      }
      return faCircleExclamation
  }
}

