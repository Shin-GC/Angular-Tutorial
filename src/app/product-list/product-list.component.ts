import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = products;

  share(name: string) {
    window.alert(`The product ${name} has been shared!`);
  }
  onNotify(name: string) {
    window.alert(`${name} 할인 알림!`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
