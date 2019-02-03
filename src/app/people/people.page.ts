import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { getRoom, deletePerson } from '../../firebase'

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  room: String
  people = []
  isSpinnerVisible = true

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.room = this.route.snapshot.paramMap.get('id')
    getRoom(this.room).on('value', snapshot=> {
      if(snapshot.val() != null) {
        let roomdata = snapshot.val()
        this.people = []
        Object.keys(roomdata).map(key => {
          this.people.push(key)
        })
      }
      this.isSpinnerVisible = false
    })
  }

  gotoNewPersonPage() {
    this.navCtrl.navigateForward('/room/' + this.room + '/people/new')
  }

  closeModal() {
    this.navCtrl.navigateBack('/room/' + this.room)
  }

  deletePerson(person) {
    deletePerson(this.room, person)
  }

}
