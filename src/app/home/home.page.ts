import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {NewRoomPage} from '../new-room/new-room.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController){

  }

  gotoCreateRoom() {
    this.navCtrl.navigateForward('/NewRoomPage')
  }
}
