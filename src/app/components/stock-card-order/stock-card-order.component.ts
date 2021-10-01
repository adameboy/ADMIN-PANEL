import { Component, ElementRef, OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-card-order',
  templateUrl: './stock-card-order.component.html',
  styleUrls: ['./stock-card-order.component.scss']
})
export class StockCardOrderComponent implements OnInit {

  form:FormGroup;

  names = [
    { value: 'H', viewValue: 'Oscar' },
    { value: 'M', viewValue: 'Felix' }
  ];
  products = [
    { value: 'H', viewValue: 'IN VEL,PORTITO' },
    { value: 'M', viewValue: 'Felix' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
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
    })

    this.form.controls.product.setValue('H');
  }


}
