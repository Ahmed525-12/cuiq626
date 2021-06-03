import { Iproduct } from './../../parent/shared/directives/pipes/models/product';

import { Component, OnInit, DoCheck,HostListener } from '@angular/core';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  result!: number;
  product!: Iproduct[];
  data: any;
  users: any;
  search=''
  constructor(private productsservice:ProductsService,) { }
  ngDoCheck(): void {

    this.getProducts()
  }
  headerimg='../assets/img/header.jpg'

  ngOnInit(): void {



  }
  getProducts(){
    this.productsservice.getproducts().subscribe(
      (res:any) =>{
            this.product=res


      }
    )
    // this.sortpr()
      }


      // sortpr(){
      //   this.product.sort((a:any,b:any)=>a.price - b.price)
      // }
      toHome(){
        document.getElementById("home")?.scrollIntoView({behavior:"smooth"})
      }
      ashow=false
      @HostListener("document:scroll")
      scrollfun(){
        if (document.documentElement.scrollTop > 0) {
          this.ashow=true

        } else {
          this.ashow=false
        }
      }
      opened=false
togglesidebar(){
  this.opened=!this.opened
}
}
