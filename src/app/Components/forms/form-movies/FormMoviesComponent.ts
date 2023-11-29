import { Component, NgModule, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { movieModel } from 'src/app/Models/movieModel';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import Swal from 'sweetalert2';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css'],
})
export class FormMoviesComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Id: [""],
    Name: ["", Validators.required],
    Runtime: ["", Validators.required],
    ReleaseDate: ["", Validators.required],
    Genre: ["", Validators.required],
    Rating: ["", Validators.required],
    Director: ["", Validators.required],
    Status: [""]
  });

  movie: movieModel = {
    name: "",
    runtime: 0,
    releaseDate: null,
    genre: "",
    rating: "",
    director: "",
    status: true,
    idMovie: 0
  }
  hasUnitNumber = false;
  controller: string = "Movies";

  onSubmit(): void {

    if (this.modalService.action.value == "New") {
      if (this.addressForm.valid) {
        this.movie.name = this.addressForm.controls["Name"].value;
        this.movie.runtime = Number(this.addressForm.controls["Runtime"].value);
        this.movie.releaseDate = moment(this.addressForm.controls["ReleaseDate"].value).toDate();
        this.movie.genre = this.addressForm.controls["Genre"].value;
        this.movie.rating = this.addressForm.controls["Rating"].value;
        this.movie.director = this.addressForm.controls["Director"].value;
        this.movie.status = Boolean(this.addressForm.controls["Status"].value);

        this.api.Post(this.controller, this.movie).then(res => {
          if (res != null) {
            Swal.fire(
              'Successfully Created!',
              '',
              'success'
            )
            this.dialogRef.close();
            location.reload();
          } else {
            Swal.fire(
              'Fill the data correctly',
              '',
              'error'
            )
          }
        })

      } else {
        Swal.fire(
          'Fill the data required',
          'Try again',
          'error'
        )
      }
      this.addressForm.reset();

    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, modify it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.movie.idMovie = Number(this.addressForm.controls["Id"].value);
          this.movie.name = this.addressForm.controls["Name"].value;
          this.movie.runtime = Number(this.addressForm.controls["Runtime"].value);
          this.movie.releaseDate = moment(this.addressForm.controls["ReleaseDate"].value).toDate();
          this.movie.genre = this.addressForm.controls["Genre"].value;
          this.movie.rating = this.addressForm.controls["Rating"].value;
          this.movie.director = this.addressForm.controls["Director"].value;
          this.movie.status = Boolean(this.addressForm.controls["Status"].value);
          console.log(this.movie);

          this.api.Update(this.controller, String(this.movie.idMovie), this.movie).then((res => {
            console.log(res);
          }
          ));
          Swal.fire(
            'Modified!',
            'Your file has been modified.',
            'success'
          )
          this.dialogRef.close();
          location.reload();
        }
      })
    }
  }

  constructor(
    private modalService: ModalService, public api: ApiService, public dialogRef: MatDialogRef<FormMoviesComponent>
  ) { }

  title = "";
  action = "";

  ngOnInit(): void {
    this.title = this.modalService.title;
    this.action = this.modalService.action.value;

    if (this.modalService.action.value == "Edit") {
      this.addressForm.controls['Id'].setValue(
        String(this.modalService.movie.idMovie)
      );
      this.addressForm.controls['Name'].setValue(
        this.modalService.movie.name
      );
      this.addressForm.controls['Runtime'].setValue(
        String(this.modalService.movie.runtime)
      );
      this.addressForm.controls['ReleaseDate'].setValue(
        String(this.modalService.movie.releaseDate)
      );
      this.addressForm.controls['Genre'].setValue(
        this.modalService.movie.genre
      );
      this.addressForm.controls['Rating'].setValue(
        String(this.modalService.movie.rating)
      );
      this.addressForm.controls['Director'].setValue(
        this.modalService.movie.director
      );
      this.addressForm.controls['Status'].setValue(
        String(this.modalService.movie.status)
      );
    }
  }

  booleanOptions = [
    { label: 'True', value: true },
    { label: 'False', value: false }
  ];

  selectedValue: boolean;
}
