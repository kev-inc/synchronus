import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'my-timetable', loadChildren: './my-timetable/my-timetable.module#MyTimetablePageModule' },
  { path: 'saved', loadChildren: './saved/saved.module#SavedPageModule' },
  { path: 'new-room', loadChildren: './new-room/new-room.module#NewRoomPageModule' },
  { path: 'room/:id', loadChildren: './room/room.module#RoomPageModule' },
  { path: 'room/:id/people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'new-person', loadChildren: './new-person/new-person.module#NewPersonPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
