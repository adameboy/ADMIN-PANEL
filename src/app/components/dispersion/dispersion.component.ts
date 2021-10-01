import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DecimalPipe } from '@angular/common';

export interface Charge {
  disperse: number;
  employee: string;
  cardNumber: string;
  account: string,
  name: string,
  product: string,
}

const ELEMENT_DATA: Charge[] = [
  { disperse: 248.55, employee:'Bessie Cooper', cardNumber: '4055550128', account: 'Cuenta', name:'Arnele Mckoy', product:'Pretium nulla fas'},
  { disperse: 518.55, employee:'Charls Cooper', cardNumber: '4055550128', account: 'Cuenta', name:'Arnele Mckoy', product:'Test-PRODUCTS'},
  { disperse: 648.55, employee:'Timmy Turner', cardNumber: '4055550128', account: 'Cuenta', name:'Arnele Mckoy', product:'Test-PRODUCTS'},
  { disperse: 348.55, employee:'Erick Banks', cardNumber: '4055550128', account: 'Cuenta', name:'Arnele Mckoy', product:'Pretium nulla fas'},
  { disperse: 148.55, employee:'Bessie Cooper', cardNumber: '4055550128', account: 'Cuenta', name:'Arnele Mckoy', product:'Pretium nulla fas'},
];
@Component({
  selector: 'app-dispersion',
  templateUrl: './dispersion.component.html',
  styleUrls: ['./dispersion.component.scss']
})
export class DispersionComponent implements OnInit {

  columns = [
    {
      columnDef: 'disperse',
      header: 'Dispersar',
      cell: (element: Charge) => `$ ${this.numberPipe.transform(element.disperse,'1.2-2')}`
    },
    {
      columnDef: 'employee',
      header: 'Empleado',
      cell: (element: Charge) => `${element.employee}`
    },
    {
      columnDef: 'cardNumber',
      header: 'No. Tarjeta',
      cell: (element: Charge) => `${element.cardNumber}`
    },
    {
      columnDef: 'account',
      header: 'Cuenta',
      cell: (element: Charge) => `${element.account}`
    },
    {
      columnDef: 'name',
      header: 'Nombre',
      cell: (element: Charge) => `${element.name}`
    },
    {
      columnDef: 'product',
      header: 'Producto',
      cell: (element: Charge) => `${element.product}`
    }
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    private numberPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
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
        case 'disperse': return compare(b.disperse, a.disperse, isAsc);
        case 'employee': return compare(a.employee, b.employee, isAsc);
        case 'cardNumber': return compare(a.cardNumber, b.cardNumber, isAsc);
        case 'account': return compare(a.account, b.account, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'product': return compare(a.product, b.product, isAsc);
        default: return 0;
      }
    }));
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
