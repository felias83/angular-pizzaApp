import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"]
})
export class DeliveryComponent implements OnInit {
  constructor(private cartService: CartService) {}
  deliveryCosts = this.cartService.getDeliveryPrices();
  ngOnInit() {}
}
