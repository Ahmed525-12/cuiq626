import { CheckoutService } from './services/checkout.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChekoutGuard implements CanActivate {
  constructor(private checkout:CheckoutService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!this.checkout.is_checked) {
        this.router.navigate(['/checkout'])
      }
    return this.checkout.is_checked;
  }

}
