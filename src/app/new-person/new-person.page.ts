import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { addUrl } from '../../firebase' 

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.page.html',
  styleUrls: ['./new-person.page.scss'],
})
export class NewPersonPage implements OnInit {

  room

  newPerson = {
    name: "",
    url: "",
    room_code: ""
  }
  errorText = ""

  isSpinnerVisible = false

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = this.route.snapshot.paramMap.get('id')
    this.newPerson.room_code = this.room
  }

  closeModal() {
    this.navCtrl.navigateBack('/room/' + this.room + '/people')
  }

  addPerson() {
    console.log(this.newPerson)
    this.isSpinnerVisible = true
    this.errorText = ""
    if(this.newPerson.name == "") {
      this.errorText = "Please enter a name"
      this.isSpinnerVisible = false
    }else if(!this.newPerson.url.includes("http://modsn.us/")) {
      this.errorText = "You entered an invalid url"
      this.isSpinnerVisible = false
    } else {
      addUrl().push(this.newPerson, () => {
        this.navCtrl.navigateBack('/room/' + this.room)
      })
    }
  }

}
