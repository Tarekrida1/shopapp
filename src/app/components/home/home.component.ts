import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';
import { GoodService } from 'src/app/services/good.service';
import { element } from '@angular/core/src/render3';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: Good[] = [];
  goodsObservable: Subscription;
  add = -1;
  isUser2 = false;
  constructor(private gs: GoodService,
              private ct: CartService,
              private ass: AuthService) { }

  ngOnInit() {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
      });
    });
    this.ass.user.subscribe(user => {
      if (user) {
        this.isUser2 = true;
        this.ass.userId = user.uid;
      } else {
      this.isUser2 = false;
      this.ass.userId = '';
      }
    });
  }
  ngOnDestroy() {
    this.goodsObservable.unsubscribe();
  }
  addToCart(index: number) {
    this.add = +index;
  }
  buy(amount: number) {
    const selectedGood = this.goods[this.add];
    const data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    };
    this.ct.addToCart(data).then(() => this.add = -1);
  }
}
