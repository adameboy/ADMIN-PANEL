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

  data = [{
    image: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
    text: 'Jesus te agrego a facebook'
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    text: 'Alejandro esta buscando nuevas personas'
  },
  {
    image: 'https://lh3.googleusercontent.com/proxy/9Y423bVqL7xi0kLxAG_JcnSBUVLimUkqB6OBTAB7ZzZvXjn-v6aUeYi43DSAlToBpyl3D_lp6dskOn-F3BMufJ08kiNdalE1MHpITWV3GKNakw',
    text: 'Notificacion de prueba en el menu'
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    text: 'Alejandro esta buscando nuevas personas'
  },
  {
    image: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
    text: 'Jesus te agrego a facebook'
  },
  {
    image: 'https://lh3.googleusercontent.com/proxy/9Y423bVqL7xi0kLxAG_JcnSBUVLimUkqB6OBTAB7ZzZvXjn-v6aUeYi43DSAlToBpyl3D_lp6dskOn-F3BMufJ08kiNdalE1MHpITWV3GKNakw',
    text: 'Notificacion de prueba en el menu'
  },
  ]

  user: User = null;

  constructor(
    private authService: AuthenticationService,
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
