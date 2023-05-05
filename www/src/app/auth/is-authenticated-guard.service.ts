import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class IsAuthenticatedGuardService {
  constructor(public userService: UserService, public router: Router) {}

  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
      this.router.navigateByUrl('pets');
    }
    return true;
  }
}
