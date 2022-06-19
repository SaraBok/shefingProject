import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
//import { BagComponent } from './bag/bag.component';
//import { CommonModule } from '@angular/common';

//i//mport { ShowItemComponent } from './show-item/show-item.component';
//import { ProductListComponent } from './product-list/product-list.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { HomeRoutingModule } from './home-routing/home-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
    //BagComponent,
   // ShowItemComponent
   
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
