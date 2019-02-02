import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { getRoom, getRoomCount, checkRoom } from '../../firebase'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  room = {
    name: "",
    password: ""
  }

  roomsCreated = 0

  errorText = ""

  isSpinnerVisible = false

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    getRoomCount().once('value', snapshot => {
      let count = Object.keys(snapshot.val()).length
      this.roomsCreated = count
    })
  }

  gotoNewRoomPage() {
    this.navCtrl.navigateForward('/new-room')
  }

  gotoRoomPage() {
    this.isSpinnerVisible = true
    this.errorText = ""
    if (this.room.name != "") {
      checkRoom(this.room.name).once('value', snapshot => {
        if (snapshot.val() == null) {
          this.errorText = "Room does not exist"
          this.isSpinnerVisible = false
        } else {
          let password = snapshot.val().password
          if (password == this.room.password) {
            this.isSpinnerVisible = false
            this.navCtrl.navigateForward('/room/' + this.room.name)

          } else {
            this.isSpinnerVisible = false
            this.errorText = "Wrong password"
          }
        }
      })
    } else {
      this.isSpinnerVisible = false
      this.errorText = ""
    }
  }
}
