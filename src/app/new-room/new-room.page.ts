import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { checkRoom, createRoom } from '../../firebase'

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

  errorText = ""

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  closeModal() {
    this.navCtrl.navigateBack('')
  }

  createNewRoom() {
    this.errorText = ""
    if (this.newRoom.name == "") {
      this.errorText = "Please enter a room name"
    } else if(!this.alphanumeric(this.newRoom.name)) {
      this.errorText = "You entered an invalid room name"
    } else if(this.newRoom.password == "") {
      this.errorText = "Please enter a password"
    } else if(!this.alphanumeric(this.newRoom.password)) {
      this.errorText = "You entered an invalid password"
    } else if (this.newRoom.password != this.confirmPassword) {
      this.errorText = "Passwords are not the same"
    } else {
      checkRoom(this.newRoom.name).once('value', snapshot => {
        if(snapshot.val() != null) {
          this.errorText = "This room name has been used"
        } else {
          createRoom(this.newRoom.name, this.newRoom.password)
          this.navCtrl.navigateForward('/room/' + this.newRoom.name)
        }
      })
    }
      // this.navCtrl.navigateForward('/room/' + this.newRoom.name)

  }

  alphanumeric(inputtxt) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (inputtxt.match(letters)) {
      return true;
    }
    else {
      return false;
    }
  }

}
