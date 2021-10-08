import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceDetectorService } from 'ngx-device-detector';
export interface Charge {
  date: Date;
  description: string;
  amount: number;
  deposit: boolean;
}






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  months = ['Enero','Febrero','Marzo','Abril']
  cards = [{
    number: '5431 5682 **** ****',
    data: [
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 12)), description: 'SU ABONO...GRACIAS', amount: 1722, deposit: true },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 20)), description: 'AMAZON MX MKTPLACE', amount: 7570, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 30)), description: 'WALMART MX SHOPPINGNEW', amount: 1200, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 35)), description: 'AMAZON MX MKTPLACE MSI ANE1237', amount: 1050, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 40)), description: 'SU ABONO...GRACIAS', amount: 750, deposit: true },
    ]
  },
  {
    number: '4624 3104 **** ****',
    data: [
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 8)), description: 'LA ALMEJA MX', amount: 750, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 13)), description: 'MERCADO PAGO MSI MX', amount: 1250, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 19)), description: 'SU ABONO...GRACIAS', amount: 521, deposit: true },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 32)), description: 'SU ABONO...GRACIAS', amount: 1048, deposit: true },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 50)), description: 'MICROSOFT MX ITEM-239', amount: 4050, deposit: false },
    ]
  },
  {
    number: '5482 3401 **** ****',
    data: [
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 2)), description: 'GASOSERVICIO OILGAS EX GOE 10034678VH', amount: 3222, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 12)), description: 'AMAZON MX MKTPLACE MSI ANE', amount: 4758, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 22)), description: 'GASOSERVICIO OILGAS EX GOE 10034678MX', amount: 521, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 33)), description: 'AMAZON MX MKTPLACE MSI ANE1237', amount: 1048, deposit: false },
      { date: new Date(Date.now() - (3600 * 1000 * 24 * 37)), description: 'SU ABONO...GRACIAS', amount: 4050, deposit: true },
    ]
  }]
  ELEMENT_DATA: Charge[] = this.cards[0].data;
  showCarousel = this.device.isMobile();
  disableThirdHeader = false;
  actualDate = new Date();
  columns = [
    {
      columnDef: 'date',
      header: 'Fecha',
      width: '5%',
      cell: (element: Charge) => `${this.datePipe.transform(element.date, 'd MMM y')}`
    },
    {
      columnDef: 'description',
      header: 'Descripción',
      width: '5%',
      cell: (element: Charge) => `${element.description}`
    },
    {
      columnDef: 'amount',
      header: 'Monto',
      width: '80%',
      cell: (element: Charge) => `${element.deposit ? '' : '-'}$${this.numberPipe.transform(element.amount, '1.2-2')}`
    }
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(
    private datePipe: DatePipe,
    private numberPipe: DecimalPipe,
    private device: DeviceDetectorService,
  ) {

  }

  ngOnInit(): void {
  }


  sortData(sort) {
    const data = this.ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = new MatTableDataSource(data);
      return;
    }

    this.dataSource = new MatTableDataSource(data.sort((a, b) => {
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


  lastMonth() {
    this.actualDate = new Date(this.actualDate.setMonth(this.actualDate.getMonth() - 1))
    console.log(this.actualDate)
  }
  nextMonth() {
    this.actualDate = new Date(this.actualDate.setMonth(this.actualDate.getMonth() + 1))
    console.log(this.actualDate);

  }

  refillTableDesktop(i: number) {
    const ELEMENT_DATA: Charge[] = this.cards[i].data;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  refillTable(event: number) {
    const ELEMENT_DATA: Charge[] = this.cards[event].data;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




