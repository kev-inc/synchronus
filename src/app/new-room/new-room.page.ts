import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  newRoom = {
    name: "",
    password: ""
  }

  confirmPassword = ""

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  closeModal() {
    this.navCtrl.navigateBack('/home')
  }

  createNewRoom() {
    if(this.newRoom.password == this.confirmPassword) {
      alert('New room created')
      this.navCtrl.navigateBack('/home')
    } else {
      alert('Passwords are not the same')
    }
  }

}
