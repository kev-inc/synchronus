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

  saveRoom() {
    if (typeof (Storage) !== "undefined") {
      console.log(localStorage.saved)
      let saved
      if (localStorage.saved != undefined) {
        saved = JSON.parse(localStorage.saved)
        let index = saved.indexOf(this.room)
        if(index == -1) {
          saved.push(this.room)
          alert("Added to saved")
        } else {
          saved.splice(index, 1)
          alert("Removed from saved")
        }
      } else {
        saved = []
        saved.push(this.room)
      }
      
      localStorage.saved = JSON.stringify(saved)

    } else {
      alert("Your browser does not support local storage")
    }
  }
}