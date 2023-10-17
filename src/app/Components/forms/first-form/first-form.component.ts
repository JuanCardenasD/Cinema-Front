import { Component, inject } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})



export class FirstFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Name: [null, Validators.required],
    Runtime: [null, Validators.required],
    ReleaseDate: [null, Validators.required],
    Genre: [null, Validators.required],
    Rating: [null, Validators.required],
    Director: [null, Validators.required],
  });

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }
}
