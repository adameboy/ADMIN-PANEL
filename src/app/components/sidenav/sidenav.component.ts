import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private device: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {

    if(this.device.isMobile()){
      this.toggleSidebarForMe.emit();
    }


  }

}
