import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainsComponent } from './mains.component';
// import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [
    MainsComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
   
  ]
})
export class MainModule { }
