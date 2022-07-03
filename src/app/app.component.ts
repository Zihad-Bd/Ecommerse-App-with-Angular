import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'assignment-data-table-app';
  showProductsManagement: Boolean = false;

  constructor(private loginService: LoginServiceService) {
  }

  ngOnInit(): void {
    this.loginService.loginStatusChanged.subscribe(value => {
      this.showProductsManagement = value;
      console.log(this.showProductsManagement);
      
    });
  }

/*   tableColumns = [
    { columnDef: 'ProductName', header: 'ProductName', cell: (element: Record<string, any>) => `${element['ProductName']}` },
    { columnDef: 'ProductShortCode', header: 'ProductShortCode', cell: (element: Record<string, any>) => `${element['ProductShortCode']}` },
    { columnDef: 'Category', header: 'Category', cell: (element: Record<string, any>) => `${element['Category']}` },
    { columnDef: 'Price', header: 'Price', cell: (element: Record<string, any>) => `${element['Price']}` },
    { columnDef: 'Description', header: 'Description', cell: (element: Record<string, any>) => `${element['Description']}` },
    { columnDef: 'ImageUrl', header: 'ImageUrl', cell: (element: Record<string, any>) => `${element['ImageUrl']}` },
    { columnDef: 'IsBestAchived', header: 'IsBestAchived', cell: (element: Record<string, any>) => `${element['IsBestAchived']}` },
    { columnDef: 'CreatedDate', header: 'CreatedDate', cell: (element: Record<string, any>) => `${element['CreatedDate']}` },
    { columnDef: 'Origin', header: 'Origin', cell: (element: Record<string, any>) => `${element['Origin']}` },
  ];*/
}
