import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  savedRooms = []

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    if(localStorage.saved != undefined) {
      this.savedRooms = JSON.parse(localStorage.saved)
    }
  }

  gotoRoom(room) {
    this.navCtrl.navigateForward('/room/' + room)
  }

}
