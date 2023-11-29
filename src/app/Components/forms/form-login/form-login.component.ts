import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { userModel } from 'src/app/Models/userModel';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import { FormMoviesComponent } from '../form-movies/FormMoviesComponent';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(
    private modalService: ModalService, public api: ApiService, public dialogRef: MatDialogRef<FormMoviesComponent>, private router: Router
  ) { }

  title = "Login";
  response = "";

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    userName: ["", Validators.required],
    password: ["", Validators.required]
  });

  user: userModel = {
    user: 0,
    name: "",
    lastName: "",
    userName: "",
    password: ""
  };

  hasUnitNumber = false;
  controller: string = "Users";

  private currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /* // Exponer la variable reactiva como un observable
  currentUser$ = this.currentUserSubject.asObservable(); */

  updateCurrentSession(online: boolean) {
    localStorage.setItem('currentSession', String(online));
    this.currentUserSubject.next(String(online))
  }

  // Función para actualizar el valor de 'currentUser'
  updateCurrentUser(username: string) {
    localStorage.setItem('currentUser', username);
    this.currentUserSubject.next(username);
  }

  onSubmit(): void {
    this.user.userName = this.addressForm.controls["userName"].value;
    this.user.password = this.addressForm.controls["password"].value;
    //this.response = "";
    this.api.login(this.user.userName, this.user.password).then((res => {
      console.log(res)
      if (res.length != 0) {
        //this.response = "true";
        this.updateCurrentUser(res[0].nuser);
        this.updateCurrentSession(true);
        Swal.fire("Success!");
        this.dialogRef.close();
        window.location.reload();
        this.router.navigate(['/']);
      } else {
        //this.response = "false";
        this.updateCurrentSession(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your Username or Password is incorrect",
        });
      }
    }))
  }
}
