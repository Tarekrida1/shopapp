import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';
import { NgForm } from '@angular/forms';
import { GoodService } from 'src/app/services/good.service';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  @ViewChild('image') image: ElementRef;
  constructor(private gs: GoodService) { }

  ngOnInit() {
  }
  addNewGood(form: NgForm) {
   const name = (form.value as Good).name;
   const price = (form.value as Good).price;
   const image = (this.image.nativeElement as HTMLInputElement).files[0];
   this.gs.addNewGood(name, price, image);
  }
}
