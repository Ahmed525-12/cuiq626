import { Router } from '@angular/router';
import { CheckoutService } from './../../parent/shared/directives/pipes/services/checkout.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/parent/shared/directives/pipes/services/cart.service';
import { ProductsService } from 'src/app/products.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {

  constructor(public cartservice:CartService,private productsservice:ProductsService,private checkoutservice:CheckoutService,private router:Router) { }
loginform!:FormGroup
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,



      ]),


    });
  }

  checkout(){
if (this.loginform.valid) {
  this.checkoutservice.doLogin()
  this.router.navigate(['/success'])
}
  }
}
