import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './Components/movies/movies.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { UsersComponent } from './Components/users/users.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AdministrativeComponent } from './Components/administrative/administrative.component';
import { FirstFormComponent } from './Components/forms/first-form/first-form.component';
import { FormMoviesComponent } from './Components/forms/form-movies/form-movies.component';


const routes: Routes = [
  {path:"Shop", component: TicketsComponent},
  {path:"Movies", component: MoviesComponent},
  {path:"Users", component: UsersComponent},
  {path:"Rooms", component: RoomsComponent},
  {path:"Sales", component: SalesComponent},
  {path:"Administrative", component: AdministrativeComponent},
  {path:"Form", component: FirstFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
