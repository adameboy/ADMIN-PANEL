import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader} from './route.animation';
import { AuthenticationService } from './_services/auth.service';
import { User } from './_models/user';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {
  currentUser: User;

  title = 'admin-panel-layout';
  sideBarOpen = this.device.isMobile() || this.device.isTablet()?false :true;
  


  constructor(
    private device: DeviceDetectorService,
    private authService: AuthenticationService,
  ) {
    this.authService.currentUser.subscribe(x =>{
      this.currentUser = x});
  }

  



  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
