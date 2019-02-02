import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  closeModal() {
    this.navCtrl.navigateBack('/home')
  }

}
