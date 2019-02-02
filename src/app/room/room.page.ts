import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from "@ionic/angular";
import { PeoplePage } from "src/app/people/people.page";

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  gotoPeoplePage() {
    this.navCtrl.navigateForward('/people')
  }
}