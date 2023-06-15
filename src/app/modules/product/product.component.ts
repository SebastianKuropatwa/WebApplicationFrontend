import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product';
import { Page } from 'src/app/shared/model/page';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  page!: Page<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(page => this.page = this.page);
  }

}
