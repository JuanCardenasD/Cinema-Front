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
    Show: [null, Validators.required],
    movie: [null, Validators.required],
    Row: [null, Validators.required],
    Column: [null, Validators.required],
    user: [null, Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }

  movies: movie[] = [
    {value: "Barbie", viewValue: "Barbie"},
    {value: "Oppenheimer", viewValue: "Oppenheimer"},
    {value: "Misión Imposible: Sentencia Mortal - Parte 1	", viewValue: "Misión Imposible: Sentencia Mortal - Parte 1	"},
  ]

  users: user[] = [
    {value: "Juan", viewValue: "Juan"},
    {value: "Paola", viewValue: "Paola"},
  ]
}

interface movie {
  value: string;
  viewValue: string;
}

interface user {
  value: string;
  viewValue: string;
}


