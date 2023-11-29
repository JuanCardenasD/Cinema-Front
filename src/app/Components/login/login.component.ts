import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import { FormUsersComponent } from '../forms/form-users/form-users.component';
import { FormLoginComponent } from '../forms/form-login/form-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public api: ApiService, public dialog: MatDialog, public modalService: ModalService) {
  }
  
  ngOnInit(): void {
    this.dialog.open(FormLoginComponent, {
    })
  }
}
