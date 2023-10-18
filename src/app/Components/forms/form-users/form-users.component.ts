import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


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

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }
}
