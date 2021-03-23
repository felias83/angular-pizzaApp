import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  addToCart(product) {
    this.items.push(product);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.items));
  }
  getDeliveryPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(private http: HttpClient) {}
}
