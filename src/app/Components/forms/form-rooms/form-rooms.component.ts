import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/Services/modal.service';


@Component({
  selector: 'app-form-rooms',
  templateUrl: './form-rooms.component.html',
  styleUrls: ['./form-rooms.component.css']
})
export class FormRoomsComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Room: [null, Validators.required],
    Seats: [null, Validators.required],
    Capacity: [null, Validators.required]
  });

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
  }
}