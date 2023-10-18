import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


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
}