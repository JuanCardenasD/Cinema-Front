import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormRoomsComponent } from '../forms/form-rooms/form-rooms.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  implements OnInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns:string[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(public api: ApiService, public dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.api.Get("Rooms").then((res)=>{
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
    this.dialog.open(FormRoomsComponent,{

    });
  }
}