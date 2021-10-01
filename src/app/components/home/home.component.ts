import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
export interface Charge {
  date: Date;
  description: string;
  amount: number;
  deposit: boolean;
}

const ELEMENT_DATA: Charge[] = [
  {date: new Date(), description: 'GASOSERVICIO OILGAS EX GOE 10034678VH', amount: -3222,deposit:false },
  {date: new Date(Date.now() - (3600 * 1000 * 24 * 32)), description: 'SU ABONO...GRACIAS', amount: 4050,deposit:true },
  {date: new Date(Date.now() - (3600 * 1000 * 24 * 62)), description: 'AMAZON MX MKTPLACE MSI ANE', amount: -4758,deposit:false },
  {date: new Date(Date.now() - (3600 * 1000 * 24 * 52)), description: 'GASOSERVICIO OILGAS EX GOE 10034678MX', amount: -521,deposit:false },
  {date: new Date(Date.now() - (3600 * 1000 * 24 * 42)), description: 'AMAZON MX MKTPLACE MSI ANE1237', amount: -1048,deposit:false },
];
let sortedData = ELEMENT_DATA.slice();




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
  

export class HomeComponent implements OnInit {
  disableThirdHeader = false;
  actualDate = new Date();
  columns = [
    {
      columnDef: 'date',
      header: 'Fecha',
      cell: (element: Charge) => `${this.datePipe.transform(element.date,'d MMM y')}`
    },
    {
      columnDef: 'description',
      header: 'Descripción',
      cell: (element: Charge) => `${element.description}`
    },
    {
      columnDef: 'amount',
      header: 'Monto',
      cell: (element: Charge) => `$ ${this.numberPipe.transform(element.amount,'1.2-2')}`
    }
  ];

  dataSource = new MatTableDataSource (ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  cards = [{
    name: 'test'
  },
  { name: 'test2' },
  { name: 'test2' }]


  constructor(
    private datePipe: DatePipe,
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

    this.dataSource = new MatTableDataSource (data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active.columnDef) {
        case 'date': return compare(a.date.getTime(), b.date.getTime(), isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'amount': return compare(b.amount, a.amount, isAsc);
        default: return 0;
      }
    }));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  lastMonth(){
    this.actualDate = new Date(this.actualDate.setMonth(this.actualDate.getMonth()-1))
    console.log(this.actualDate)
  }
  nextMonth(){
    this.actualDate = new Date(this.actualDate.setMonth(this.actualDate.getMonth()+1))
    console.log(this.actualDate);

  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




