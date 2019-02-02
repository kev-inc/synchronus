import { Component, OnInit, Input } from '@angular/core';
import { getRoom } from '../../firebase'

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  @Input()
  public room: String

  data = [
    {
      800: [],
      900: [],
      1000: [],
      1100: [],
      1200: [],
      1300: [],
      1400: [],
      1500: [],
      1600: [],
      1700: [],
      1800: [],
      1900: [],
      2000: [],
      2100: []
    },{
      800: [],
      900: [],
      1000: [],
      1100: [],
      1200: [],
      1300: [],
      1400: [],
      1500: [],
      1600: [],
      1700: [],
      1800: [],
      1900: [],
      2000: [],
      2100: []
    },{
      800: [],
      900: [],
      1000: [],
      1100: [],
      1200: [],
      1300: [],
      1400: [],
      1500: [],
      1600: [],
      1700: [],
      1800: [],
      1900: [],
      2000: [],
      2100: []
    },{
      800: [],
      900: [],
      1000: [],
      1100: [],
      1200: [],
      1300: [],
      1400: [],
      1500: [],
      1600: [],
      1700: [],
      1800: [],
      1900: [],
      2000: [],
      2100: []
    },{
      800: [],
      900: [],
      1000: [],
      1100: [],
      1200: [],
      1300: [],
      1400: [],
      1500: [],
      1600: [],
      1700: [],
      1800: [],
      1900: [],
      2000: [],
      2100: []
    }
  ]

  constructor() { }

  ngOnInit() {
    getRoom(this.room).on('value', snapshot => {
      if(snapshot.val() != null) {
        console.log(snapshot.val())
      }
    })
  }

}
