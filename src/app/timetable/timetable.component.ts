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

  days = [
    {
      day: 'MON',
      rows: 1
    },
    {
      day: 'TUE',
      rows: 1
    },
    {
      day: 'WED',
      rows: 1
    },
    {
      day: 'THU',
      rows: 1
    },
    {
      day: 'FRI',
      rows: 1
    },

  ]

  table: {}[] = [
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
      if (snapshot.val() != null) {
        let data = snapshot.val()
        console.log(data)
        Object.keys(data).forEach(person => {
          let mods = data[person]

          Object.keys(mods).forEach(mod => {
            let day, start, end, module_code, type, venue, week, hidden, custom, key
            start = +mods[mod].start
            end = +mods[mod].end
            module_code = mods[mod].module_code
            type = mods[mod].type.slice(0, 3).toUpperCase()
            venue = mods[mod].venue
            week = mods[mod].week
            hidden = mods[mod].hidden
            custom = mods[mod].custom
            key = mod

            switch (mods[mod].day) {
              case "Monday": day = 0;
                break;
              case "Tuesday": day = 1;
                break;
              case "Wednesday": day = 2;
                break;
              case "Thursday": day = 3;
                break;
              case "Friday": day = 4;
                break;
              default: day = -1;
                break;
            }

            let rowArr = []

            for (let i = start; i < end; i += 100) {
              let rowFilled = []
              let assigned = false
              this.table[day][i].map((key, index) => rowFilled.push(key.row))
              rowFilled.sort()

              for (let k = 0; k < rowFilled.length; k++) {
                if (rowFilled[k] != k && !assigned) {
                  rowArr.push(k)
                  assigned = true
                }
              }
              if (!assigned) {
                rowArr.push(rowFilled.length)
              }
            }

            let row = Math.max.apply(null, rowArr)

            for (let i = start; i < end; i += 100) {
              this.table[day][i].push({
                module_code: module_code,
                day: day,
                start: start,
                end: end,
                type: type,
                venue: venue,
                person: person,
                row: row,
                week: week,
                hidden: hidden,
                custom: custom,
                key: key
              })
            }
          })
        })
        console.log(this.table)
        this.calculateRows()
      }
    })
  }

  calculateRows() {
    this.table.map((day, index) => {
      let row = 1
      Object.keys(day).forEach(time => {
        if(this.table[index][time].length > row) {
          row = this.table[index][time].length
        }
      })
      this.days[index].rows = row
    })
    console.log(this.days)
  }

  buildArray(n) {
    return Array(n)
  }

}
