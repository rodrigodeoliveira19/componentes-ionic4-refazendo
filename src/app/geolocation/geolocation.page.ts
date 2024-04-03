import { PositionOptions } from './../../../node_modules/@capacitor/geolocation/dist/esm/definitions.d';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  resultado: any

  constructor() { }

  ngOnInit() {
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    this.resultado =  coordinates.coords.latitude//JSON.stringify(coordinates)
    console.log('Current position:', coordinates);
    console.log('latitude:', coordinates.coords.latitude);
    console.log('longitude:', coordinates.coords.longitude);
  };

  watchPosition = async () => {
    const coordinates = await Geolocation.watchPosition({timeout: 1000, enableHighAccuracy: true},(position, err) => {
      console.log('Position', position);
      console.log('Error', err);

      if(position){
        console.log('peguei nova posicao:',position.coords.latitude)
      }
      
    }); 
  }

}
