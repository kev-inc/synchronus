import { Component, OnInit, Input } from '@angular/core';
import { getRoom } from '../../firebase'
import { NavController } from "@ionic/angular";

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

  times = [
    "800",
    "900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100"
  ]

  colors = [
    "#ef5350", "#7e57c2", "#039be5", "#43a047", "#ef6c00", "#757575",
    "#ec407a", "#5c6bc0", "#0097a7", "#689f38", "#ff5722", "#78909c",
    "#ab47bc", "#42a5f5", "#26a69a", "#827717", "#a1887f"
  ]

  people = []

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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    getRoom(this.room).on('value', snapshot => {
      if (snapshot.val() != null) {
        this.people = []
        this.table = [
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
        let data = snapshot.val()
        Object.keys(data).forEach(person => {
          this.people.push(person)
          let mods = data[person]

          Object.keys(mods).forEach(mod => {
            let day, start, end, module_code, type, venue, week, hidden, custom, key
            start = +mods[mod].start
            if(start % 100 != 0) {
              let diff = start % 100
              start -= diff
            }
            end = +mods[mod].end
            if(end % 100 != 0) {
              let diff = end % 100
              end -= diff
            }
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
        this.calculateRows()
        this.findTile(0, "800", 0)
      }
    })
  }

  getColor(day, time, row) {
    let t = this.table[day][time].filter(tile => tile.row == row)
    if (t.length != 0) {
      let person = t[0].person
      let pos = this.people.indexOf(person)
      return this.colors[pos]
    }
    return ""
  }

  calculateRows() {
    this.table.map((day, index) => {
      let row = 1
      Object.keys(day).forEach(time => {
        if (this.table[index][time].length > row) {
          row = this.table[index][time].length
        }
      })
      this.days[index].rows = row
    })
  }

  buildArray(n) {
    return Array(n)
  }

  isTile(day, time, row) {
    let t = this.table[day][time].filter(tile => tile.row == row)
    if (t.length == 0) {
      return true
    } else {
      if (t[0].start == time) {
        return true
      } else {
        return false
      }
    }
  }

  isButton(day, time, row) {
    let t = this.table[day][time].filter(tile => tile.row == row)
    if (t.length == 0) {
      return false
    } else {
      if (t[0].start == time) {
        return true
      } else {
        return false
      }
    }
  }

  tileLength(day, time, row) {
    let t = this.table[day][time].filter(tile => tile.row == row)
    if (t.length != 0) {
      return (t[0].end - t[0].start) / 100
    }
    return "1"
  }

  findTile(day, time, row) {
    let t = this.table[day][time].filter(tile => tile.row == row)
    if (t.length != 0) {
      return t[0]
    }
    return ""
  }

  tileClicked(tile) {
    this.navCtrl.navigateForward('/room/' + this.room + '/details/' + tile.person + '/' + tile.key)
  }

}
