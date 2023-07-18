import { Component, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { LocationService } from '../location.service';
import { error } from '@angular/compiler/src/util';
import { Locations } from '../location-class/location';

@Component({
  selector: 'app-landing-page',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform:'translateX(-200%)'
      })),
      state('closed', style({
        transform:'translateX(0%)'
      })),
      transition('open => closed', [
        animate('0.5s ease-in')
      ]),
    ]),
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {
  filtersLoaded!: Promise<boolean>;
  active_location!: Locations;
  arr: any[];
  location!: Locations[];
  errorMsg!: string;
  isOpen: boolean = true;
  tile_live(elem: any) {
    let name = elem.target.children[0].children[2].innerHTML
    for (let i = 0; i < this.location.length; i++) {
      if (this.location[i].locationSubHeading == name) {
        this.active_location = this.location[i];
        break;
      }
    }
    console.log(elem.target.children[0].children[2].innerHTML )
    document.body.style.backgroundImage = elem.target.style['background-image'].split(")), ")[1]
    this.renderer.setStyle(elem.target, 'background-image', elem.target.style['background-image'].split(")), ")[1]);
  }
  tile_normal(elem: any) {
    this.renderer.setStyle(elem.target, 'background-image', "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"+elem.target.style['background-image']);
  }

  ngOnInit() {
    this.getLocation();
    //this.location = [{ "locationId": 1235, "locationName": "Kiyozumi Dera, Japan", "locationSubHeading": "Kyoto", "locationMainContent": "Kyoto , officially Kyoto City, is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area along with Osaka and Kobe.", "locationImages": "china/images.jpg" }, { "locationId": 1245, "locationName": "Istanbul, Turkey", "locationSubHeading": "Istanbul", "locationMainContent": "From the holy sites of Sultanahmet and the 19th-century European elegance of Beyoglu to the high fashion of Nisantasi, the vibrant cafe society of Kadik\u00F6y and the football-loving streets of Besiktas, it\u2019s easy to see why travelers say that Istanbul isn\u2019t just one city, but multiple cities within one.", "locationImages": "image/" }, { "locationId": 1246, "locationName": "Rajasthan, India", "locationSubHeading": "Rajasthan", "locationMainContent": "Rajasthan,Land of Kings is a state in northern India. Its major features include the ruins of the Indus Valley Civilisation at Kalibangan and Balathal, the Dilwara Temples, a Jain pilgrimage site at Rajasthan\u0027s only hill station, Mount Abu, in the ancient Aravalli mountain range and eastern Rajasthan, the Keoladeo National Park of Bharatpur, a World Heritage Siteknown for its bird life.", "locationImages": "image/" }]
    //this.active_location = (this.location[0])
  }
  getLocation() {
    this.service.getLocations().subscribe({
      next: location => { this.location = location, this.active_location = (location[0]), this.filtersLoaded = Promise.resolve(true); console.log("" + JSON.stringify(this.active_location)) },
      error: error => this.errorMsg = error
    })
  }
  
  constructor(private service: LocationService, private renderer: Renderer2) {
    this.arr = this.location;
    setTimeout(() => {
        this.isOpen=false;
      }, 20); 
  }
  ngAfterViewInit() {
    
  }
}

