import { ProductsService } from './../../../products.service';
import { CartService } from './../../../parent/shared/directives/pipes/services/cart.service';
import { Iproduct } from './../../../parent/shared/directives/pipes/models/product';

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnChanges {
  @Input()
  item!: Iproduct

   popup=false
   itemNum:number=0
  constructor(private cartservice:CartService,private productsservice:ProductsService) {
    console.log(this.cartservice.cartItems);

   }
  ngOnChanges(): void {

    this.item.itemCount=this.item.itemCount?this.item.itemCount:0
    this.itemNum=this.item.itemCount
  }


  ngOnInit(): void {
  this.cartservice.cartItemsCount= localStorage.getItem("cart")
  const userJson = localStorage.getItem('pocart');
  this.cartservice.cartItems = userJson !== null ? JSON.parse(userJson) : [];
  this.cartservice.cartitemsprice=localStorage.getItem("priceprod")
  }


   addTocart(value:any){
    this.item.itemCount=+ value
    this.productsservice.product.find((p:any)=>p.id === this.item.id? (p.itemCount=+ value):null)
    this.cartservice.addTocartItem(this.item)
    localStorage.setItem("cart", JSON.stringify( this.cartservice.cartItemsCount) )
    localStorage.setItem("pocart",JSON.stringify(this.cartservice.cartItems))
    localStorage.setItem("priceprod",JSON.stringify(this.cartservice.cartitemsprice))

}
getItemnum(){
  return  this.productsservice.product.find((p:any)=>p.id === this.item.id)?.itemCount
}

}
