import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from "@ionic/angular";
import { PeoplePage } from "src/app/people/people.page";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  room = ""

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.room = this.route.snapshot.paramMap.get('id')
  }

  gotoPeoplePage() {
    this.navCtrl.navigateForward('/room/' + this.room + "/people")
  }
}