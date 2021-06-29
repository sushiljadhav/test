import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../shared/product-list.service'; 

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList =[];

  constructor(private order_list : ProductListService) { }

  ngOnInit(): void {
    this.orderList = this.order_list.orderList;
    console.log(this.orderList);
  }

}
