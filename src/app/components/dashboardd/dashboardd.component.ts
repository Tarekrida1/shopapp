import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/interfaces/shopping.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboardd',
  templateUrl: './dashboardd.component.html',
  styleUrls: ['./dashboardd.component.css']
})
export class DashboarddComponent implements OnInit {

  carts: Shopping[] = [];
  constructor(private ct: CartService) { }

  ngOnInit() {
    this.ct.getCart().subscribe(carts => {
        this.carts = carts.map(shopping => {
          return {
            id: shopping.payload.doc.id,
            ...shopping.payload.doc.data()
          };
        });
    });
  }
delete(index) {
  this.ct.delete(this.carts[index].id);
}
save(index) {
  this.ct.save(this.carts[index].id, this.carts[index].amount);
}
}
