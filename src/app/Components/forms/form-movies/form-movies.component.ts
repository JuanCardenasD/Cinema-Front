import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent {
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


