import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRacesComponent } from './list-races/list-races.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RaceComponent } from './race/race.component';
import { SubraceComponent } from './subrace/subrace.component';

const appRoutes: Routes = [
  { path: 'list-races', component: ListRacesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'race/:name', component: RaceComponent },
  { path: 'subrace/:race/:subrace', component: SubraceComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
