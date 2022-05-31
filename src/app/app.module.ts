import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsDataService } from './services/products-data.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent},
  { path: "products", component: ProductsComponent,
  children : [
    { path: "create", component: CreateProductFormComponent}
  ]
  },
  { path: "my-cart", component: MyCartComponent},
  { path: "**", redirectTo: "dashboard"}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProductFormComponent,
    MyCartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent],
  entryComponents: [CreateProductFormComponent]
})
export class AppModule { }
