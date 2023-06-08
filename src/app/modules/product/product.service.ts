import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Product 1",
        category: "Kategoria 1",
        description: "Opis produktu",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "Product 2",
        category: "Kategoria 2",
        description: "Opis produktu",
        price: 15.99,
        currency: "PLN"
      },
      {
        name: "Product 3",
        category: "Kategoria 3",
        description: "Opis produktu",
        price: 20.99,
        currency: "PLN"
      },
    ]
  }
}
