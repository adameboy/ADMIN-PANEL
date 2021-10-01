import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User = null
  userForm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  hide = true;

  genders = [
    { value: 'H', viewValue: 'Hombre' },
    { value: 'M', viewValue: 'Mujer' }
  ];

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      bornDate: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      lastName2: ['', [Validators.required]],
      card: ['', [Validators.required]],
    }, {
    });

    this.fillFields();

  }

  saveChanges() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      Swal.fire({
        title: 'Listo!',
        text: 'Usuario Actualizado',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => window.location.reload())
    } else {

       Swal.fire({
        title: 'Error!',
        text: 'Campos Erroneos',
        icon: 'error',
        confirmButtonText: 'OK'
       })
      
    }
  }


  fillFields() {
    this.userForm.setValue(this.user);
  }

}
