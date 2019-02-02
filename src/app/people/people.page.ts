import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit() {
  }

  gotoNewPersonPage() {
    this.navCtrl.navigateForward('/new-person')
  }

  closeModal() {
    this.navCtrl.navigateBack('/room')
  }

}
