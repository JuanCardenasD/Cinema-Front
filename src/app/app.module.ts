import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './Components/cinema/cinema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MoviesComponent } from './Components/movies/movies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { UsersComponent } from './Components/users/users.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AdministrativeComponent } from './Components/administrative/administrative.component';
import { AvatarModule } from 'ngx-avatars';
import { FirstFormComponent } from './Components/forms/first-form/first-form.component';
import { DatePickerComponent } from './Components/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormMoviesComponent } from './Components/forms/form-movies/form-movies.component';
import { FormUsersComponent } from './Components/forms/form-users/form-users.component';
import { FormRoomsComponent } from './Components/forms/form-rooms/form-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    MenuComponent,
    MoviesComponent,
    TicketsComponent,
    UsersComponent,
    RoomsComponent,
    SalesComponent,
    AdministrativeComponent,
    FirstFormComponent,
    DatePickerComponent,
    FormMoviesComponent,
    FormUsersComponent,
    FormRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    HttpClientModule,
    AvatarModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
