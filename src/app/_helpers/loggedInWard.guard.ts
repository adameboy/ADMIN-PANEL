import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../_services/auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(): boolean {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            this.router.navigate(['/home'])
            return false;
        }else{
            return true;
        }
    }

}