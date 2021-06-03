import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiDirective } from './hi.directive';
import { WriteDirective } from './write.directive';

import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { FilterPipe } from './parent/shared/directives/pipes/filter.pipe';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { LiginComponent } from './pages/ligin/ligin.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductItemComponent } from './pages/home/product-item/product-item.component';
import { ChekoutComponent } from './pages/chekout/chekout.component';

import { SidebarModule } from 'ng-sidebar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    HiDirective,
    WriteDirective,

    FilterPipe,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    AccountComponent,
    LiginComponent,
    NavbarComponent,
    NotfoundComponent,
    LayoutComponent,

    ProductItemComponent,
     ChekoutComponent,
     SuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SpinnerCircularModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    GoogleMapsModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
