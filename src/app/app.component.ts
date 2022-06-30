import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanstar';
  products = [
    {
      "productId": 1,
      "productName": "SF-1013 Dung dịch làm lạnh tức thời Nabakem",
      "productModel": "Nabakem SF 1013",
      "productPrice": "Liên hệ"
    }
  ]
}
