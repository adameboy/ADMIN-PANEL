import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardAssignment } from './components/card-assignment/card-assignment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeliveryPointsComponent } from './components/delivery-points/delivery-points.component';
import { StockCardOrderComponent } from './components/stock-card-order/stock-card-order.component';
import { DispersionComponent } from './components/dispersion/dispersion.component';
import { IncreaseRequestComponent } from './components/increase-request/increase-request.component';
import { LoggedInAuthGuard } from './_helpers/loggedInWard.guard';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'dashboard', component: DashboardComponent },
// ];



const routes: Routes = [
  { path: '', component:HomeComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  { path: 'edit-user', component: EditUserComponent,canActivate:[AuthGuard]},
  { path: 'card-assignment', component: CardAssignment,canActivate:[AuthGuard]},
  { path: 'delivery-points', component: DeliveryPointsComponent,canActivate:[AuthGuard]},
  { path: 'stock-card-order', component: StockCardOrderComponent,canActivate:[AuthGuard]},
  { path: 'increase-request', component: IncreaseRequestComponent,canActivate:[AuthGuard]},
  { path: 'dispersion', component: DispersionComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent,canActivate:[LoggedInAuthGuard], data:{animation:'isLeft'}  },
  { path: 'register', component: RegisterComponent,canActivate:[LoggedInAuthGuard], data:{animation:'isRight'}  },
  { path: '**', redirectTo: '' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

