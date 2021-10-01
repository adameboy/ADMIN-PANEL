import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
export interface Charge {
  details: string;
  balance: string;
  id: string;
  cardNumber: string;
  account: string,
  keyEmployee: string,
  nameEmployee: string,
  product: string,
}

const ELEMENT_DATA: Charge[] = [
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' },
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' },
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' },
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' },
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' },
  { details: '0', balance: ':', id: 'C001133', cardNumber: '3333000011112222', account: '369151320', keyEmployee: 'Nibh', nameEmployee: 'Oscar Adame', product: 'Test Product' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './card-assignment.component.html',
  styleUrls: ['./card-assignment.component.scss']
})


export class CardAssignment implements OnInit {

  form: FormGroup

  products = [
    { value: 'H', viewValue: 'PREMIUM MC' },
    { value: 'M', viewValue: 'PREMIUM TEST' }
  ];

  columns = [
    {
      columnDef: 'details',
      header: 'Detalle',
      cell: (element: Charge) => `${element.details}`
    },
    {
      columnDef: 'balance',
      header: 'Saldo',
      cell: (element: Charge) => `${element.balance}`
    },
    {
      columnDef: 'id',
      header: 'ID CLIENTE',
      cell: (element: Charge) => `${element.id}`
    },
    {
      columnDef: 'cardNumber',
      header: 'Número de tarjeta',
      cell: (element: Charge) => `${element.cardNumber}`
    },
    {
      columnDef: 'account',
      header: 'Cuenta',
      cell: (element: Charge) => `${element.account}`
    },
    {
      columnDef: 'keyEmployee',
      header: 'Clave Empleado',
      cell: (element: Charge) => `${element.keyEmployee}`
    },
    {
      columnDef: 'nameEmployee',
      header: 'Nombre del empleado',
      cell: (element: Charge) => `${element.nameEmployee}`
    },
    {
      columnDef: 'product',
      header: 'Producto',
      cell: (element: Charge) => `$ ${element.product}`
    }
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  cards = [{
    name: 'test'
  },
  { name: 'test2' },
  { name: 'test2' }]



  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private numberPipe: DecimalPipe
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

  sortData(sort) {
    const data = ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = new MatTableDataSource(data);
      return;
    }

    this.dataSource = new MatTableDataSource(data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active.columnDef) {
        case 'details': return compare(a.details, b.details, isAsc);
        case 'balance': return compare(a.balance, b.balance, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        case 'cardNumber': return compare(a.cardNumber, b.cardNumber, isAsc);
        case 'account': return compare(a.account, b.account, isAsc);
        case 'keyEmployee': return compare(a.keyEmployee, b.keyEmployee, isAsc);
        case 'nameEmployee': return compare(a.nameEmployee, b.nameEmployee, isAsc);
        case 'product': return compare(a.product, b.product, isAsc);
        default: return 0;
      }
    }));
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
