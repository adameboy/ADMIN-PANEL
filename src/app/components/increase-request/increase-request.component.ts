import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-increase-request',
  templateUrl: './increase-request.component.html',
  styleUrls: ['./increase-request.component.scss']
})
export class IncreaseRequestComponent implements OnInit {

  form:FormGroup;

  products= [
    {value: 'H', viewValue: 'Gravida augue ullamcorper feug'},
    {value: 'M', viewValue: 'Gravida equr ulla'}
  ];

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      bornDate: ['', [Validators.required]],
      password: ['', [Validators.required]],
      product: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      lastName2: ['', [Validators.required]],
      card: ['', [Validators.required]],
    });

    this.form.controls.product.setValue('H');

  }

}
