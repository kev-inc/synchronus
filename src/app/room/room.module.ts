import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoomPage } from './room.page';
import { TimetableComponent } from "src/app/timetable/timetable.component";

const routes: Routes = [
  {
    path: '',
    component: RoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    
  ],
  entryComponents:[],
  declarations: [RoomPage, TimetableComponent]
})
export class RoomPageModule {}
