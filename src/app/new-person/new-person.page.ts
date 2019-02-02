import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.page.html',
  styleUrls: ['./new-person.page.scss'],
})
export class NewPersonPage implements OnInit {

  newPerson = {
    name: "",
    url: ""
  }

  isSpinnerVisible = false

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  closeModal() {
    this.navCtrl.navigateBack('/people')
  }

  addPerson() {
    console.log(this.newPerson)
    this.isSpinnerVisible = true
  }

}
