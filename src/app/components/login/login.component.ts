import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }, {
    });

  }

  login() {
    if (this.loginForm.value.email === 'oscar.adame@venteks.org' && this.loginForm.value.password === '123456') {
        this.authService.login();
    this.router.navigate(['/home']);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario No Encontrado',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  
  }

}
