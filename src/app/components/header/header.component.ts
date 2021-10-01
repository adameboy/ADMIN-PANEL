import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/auth.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  user: User = null;

  constructor(
    private authService:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  toEdit() {
    this.router.navigate(['/edit-user']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
