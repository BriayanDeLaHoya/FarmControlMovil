import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { DispositivoPage } from '../dispositivo/dispositivo';
import {LocalizacionPage} from '../localizacion/localizacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    private navCtrl: NavController
  ) {}
nav(){
  this.navCtrl.push(DispositivoPage);
}
nav1(){
  this.navCtrl.push(LocalizacionPage);
}
}