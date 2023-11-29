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
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  element: any;

  constructor(public api: ApiService, public dialog: MatDialog, public modalService: ModalService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.api.Get("Tickets").then((res) => {
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
      }
      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  loadTable(data: any) {
    this.displayedColumns = [];
    for (let colum in data[0]) {
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
    this.modalService.title="New Ticket";
    this.dialog.open(FirstFormComponent, {
    });
  }

  async deleteid(id: number) {
    console.log(id);
    this.api.Delete("Tickets", id)
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
        (await this.api.Delete("Tickets", id)).subscribe(
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
        location.reload();
      }
    })
  }

  edit(element: any){
    this.modalService.action.next("Edit");
    this.modalService.title="Edit Ticket";
    console.log(this.modalService.action);
    console.log(this.modalService.title);
    this.dialog.open(FirstFormComponent, {
    });
  }
}
