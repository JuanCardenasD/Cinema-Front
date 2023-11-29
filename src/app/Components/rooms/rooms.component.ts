import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormRoomsComponent } from '../forms/form-rooms/form-rooms.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from 'src/app/Services/modal.service';
import Swal from 'sweetalert2';

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
  element: any;

  constructor(public api: ApiService, public dialog:MatDialog, public modalService: ModalService) {
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
    this.modalService.action.next("New");
    this.modalService.title="New Room";
    this.dialog.open(FormRoomsComponent, {
    });
  }

  async deleteid(id: number) {
    console.log(id);
    this.api.Delete("Rooms", id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        (await this.api.Delete("Rooms", id)).subscribe(
          (data) => {
            console.log('Recurso eliminado con éxito.');
          },
          (error) => {
            console.error('Error al eliminar el recurso: ', error);
          }
        );
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        /* location.reload(); */
      }
    })
  }

  edit(element: any){
    this.modalService.action.next("Edit");
    this.modalService.title="Edit Room";
    this.dialog.open(FormRoomsComponent, {
    });
  }
}