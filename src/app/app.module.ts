import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsDataService } from './services/products-data.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
  { path: 'products', component: DashboardComponent },
  /*   {
    path: 'products-management',
    component: ProductsComponent,
    children: [{ path: 'create', component: CreateProductFormComponent }],
  }, */
  { path: 'my-cart', component: MyCartComponent },
  {
    path: 'products-management',
    loadChildren: () =>
      import('./products-management/products-management.module').then(
        (m) => m.ProductsManagementModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProductFormComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [ProductsDataService], 
  bootstrap: [AppComponent],
  entryComponents: [CreateProductFormComponent],
})
export class AppModule {}
