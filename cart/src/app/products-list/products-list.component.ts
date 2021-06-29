import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../shared/product-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productList = [];
  constructor(private prod_list : ProductListService,) { }

  ngOnInit(): void {
    this.productList= this.prod_list.productList;
    console.log(this.productList);
    }
 
    onAdd(item) {
      console.log(item);
      console.log
        this.prod_list.orderList.push(item);
    }
}
