import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: Shopping[] = [];
  constructor(private ct: CartService) { }

  ngOnInit() {
    this.ct.getCart().subscribe(cart => {
        this.cart = cart.map(shopping => {
          return {
            id: shopping.payload.doc.id,
            ...shopping.payload.doc.data()
          };
        });
    });
  }
delete(index) {
  this.ct.delete(this.cart[index].id);
}
save(index) {
  this.ct.save(this.cart[index].id, this.cart[index].amount);
}
}
