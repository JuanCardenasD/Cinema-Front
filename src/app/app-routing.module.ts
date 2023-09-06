import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DragDropComponent } from './Components/drag-drop/drag-drop.component';
import { TableComponent } from './Components/table/table.component';
import { TreeComponent } from './Components/tree/tree.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { UsersComponent } from './Components/users/users.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AdministrativeComponent } from './Components/administrative/administrative.component';

const routes: Routes = [
  {path:"Shop", component: TicketsComponent},
  {path:"Movies", component: MoviesComponent},
  {path:"Users", component: UsersComponent},
  {path:"Rooms", component: RoomsComponent},
  {path:"Sales", component: SalesComponent},
  {path:"Administrative", component: AdministrativeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
