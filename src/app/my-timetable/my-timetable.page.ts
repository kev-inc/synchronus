import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.page.html',
  styleUrls: ['./my-timetable.page.scss'],
})
export class MyTimetablePage implements OnInit {

  myTimetable = {
    name: "",
    url: ""
  }

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert("saved")
  }

}
