import { Component, OnInit } from '@angular/core';
import { Product } from '../store/store.page';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    desc: '',
    price: 0,
    image: '',
    dcto: 0,
  };

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    console.log('add product');
  }

}
