import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-localizacion',
  templateUrl: 'localizacion.html',
})
export class LocalizacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, 
    private googleMaps:GoogleMaps) {
  }
  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{

      this.loadMap(geoposition);
  })

  }
  loadMap(position){
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);
    let latlng = new LatLng(position.coords.latitude, position.coords.longitude);
    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      let position: CameraPosition<LatLng> = {
        target: latlng,
        zoom: 10,
        tilt: 30

      };
      map.moveCamera(position);
    })
  }
}
