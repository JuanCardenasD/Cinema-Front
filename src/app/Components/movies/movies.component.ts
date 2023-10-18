import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FirstFormComponent } from '../forms/first-form/first-form.component';
import { FormMoviesComponent } from '../forms/form-movies/form-movies.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(public api: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.api.Get("Movies").then((res)=>{
      for (let index = 0; index < res.length; index++){
        this.loadTable([res[index]]);
      }
      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  loadTable(data:any){
    this.displayedColumns = [];
    for(let colum in data[0]){
      this.displayedColumns.push(colum);
    }
    this.displayedColumns.push('Actions');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(FormMoviesComponent,{

    });
  }
}