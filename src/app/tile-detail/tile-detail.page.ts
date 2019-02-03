import { Component, OnInit } from '@angular/core';
import { findTile } from '../../firebase'
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.page.html',
  styleUrls: ['./tile-detail.page.scss'],
})
export class TileDetailPage implements OnInit {

  tile = {
    "module_code": "",
    day: "",
    start: "",
    end: "",
    type: "",
    venue: "",
    week: ""
  }

  room = ""
  person = ""

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = this.route.snapshot.paramMap.get('id')
    this.person = this.route.snapshot.paramMap.get('person')
    let key = this.route.snapshot.paramMap.get('key')
    findTile(this.room, this.person, key).once('value', snapshot => {
      this.tile = snapshot.val()
      console.log(this.tile)
    })
  }

  closeModal() {
    this.navCtrl.navigateBack('/room/' + this.room)
  }

}
