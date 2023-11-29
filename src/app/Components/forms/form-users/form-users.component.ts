import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { userModel } from 'src/app/Models/userModel';
import { ModalService } from 'src/app/Services/modal.service';


@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Name: [null, Validators.required],
    LastName: [null, Validators.required],
    UserName: [null, Validators.required],
    Pwd: [null, Validators.required]
  });

  /* user:userModel = {

  } */

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }

  constructor(
    private modalService: ModalService
  ) { }

  title="";
  action="";

  ngOnInit(): void {
    this.title = this.modalService.title;
    this.action = this.modalService.action.value;
    console.log(this.title);
    console.log(this.action);
  }
}
