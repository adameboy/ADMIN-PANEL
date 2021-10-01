import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


export interface Charge {
  details: string;
  id: string;
  product: string,
  deliveryPoint:string,
  description:string,
  street:string,
  streetNumber:string,
  colony:string,
  cp:string
}

const ELEMENT_DATA: Charge[] = [
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' },
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' },
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' },
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' },
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' },
  { details: '0', id: 'C001133', deliveryPoint:'Av Rosales', description:'St Regis', street:'macaena street ', streetNumber:'123',colony:'san juan', cp:'47860', product: 'Test Product' }
];

@Component({
  selector: 'app-delivery-points',
  templateUrl: './delivery-points.component.html',
  styleUrls: ['./delivery-points.component.scss']
})
export class DeliveryPointsComponent implements OnInit {

  form: FormGroup


  columns = [
    {
      columnDef: 'details',
      header: 'Detalle',
      cell: (element: Charge) => `${element.details}`
    },
    {
      columnDef: 'id',
      header: 'ID Cliente',
      cell: (element: Charge) => `${element.id}`
    },
    {
      columnDef: 'product',
      header: 'Producto',
      cell: (element: Charge) => `${element.product}`
    },
    {
      columnDef: 'deliveryPoint',
      header: 'Punto de netrega',
      cell: (element: Charge) => `${element.deliveryPoint}`
    },
    {
      columnDef: 'description',
      header: 'Descripción',
      cell: (element: Charge) => `${element.description}`
    },
    {
      columnDef: 'street',
      header: 'Calle',
      cell: (element: Charge) => `${element.street}`
    },
    {
      columnDef: 'streetNumber',
      header: 'No. Ext',
      cell: (element: Charge) => `${element.streetNumber}`
    },
    {
      columnDef: 'colony',
      header: 'colonia',
      cell: (element: Charge) => `${element.colony}`
    },
    {
      columnDef: 'cp',
      header: 'C.P.',
      cell: (element: Charge) => `${element.cp}`
    }
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(
    private formBuilder: FormBuilder
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
        case 'product': return compare(a.product, b.product, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        case 'deliveryPoint': return compare(a.deliveryPoint, b.deliveryPoint, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'street': return compare(a.street, b.street, isAsc);
        case 'streetNumber': return compare(a.streetNumber, b.streetNumber, isAsc);
        case 'deliveryPoint': return compare(a.deliveryPoint, b.deliveryPoint, isAsc);
        case 'colony': return compare(a.colony, b.colony, isAsc);
        case 'cp': return compare(a.cp, b.cp, isAsc);
        default: return 0;
      }
    }));
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
