import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardAssignment } from './components/card-assignment/card-assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import {MatTable, MatTableModule} from '@angular/material/table';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import { DeliveryPointsComponent } from './components/delivery-points/delivery-points.component';
import { StockCardOrderComponent } from './components/stock-card-order/stock-card-order.component';
import { DispersionComponent } from './components/dispersion/dispersion.component';
import { IncreaseRequestComponent } from './components/increase-request/increase-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    RegisterComponent,
    LoginComponent,
    EditUserComponent,
    CardAssignment,
    DeliveryPointsComponent,
    StockCardOrderComponent,
    DispersionComponent,
    IncreaseRequestComponent,
    
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatDatepickerModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
  ],
  providers: [DatePipe,DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
