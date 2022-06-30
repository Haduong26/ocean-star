import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(
      1, 
      "SF-1013 Dung dịch làm lạnh tức thời Nabakem", 
      "Nabakem SF 1013", 
      "Liên hệ", 
      '../../assets/img/product1.jpeg' 
      ),
    new Product(
      2, 
      "DC 3000 AAR Chất tẩy rửa bảnh mạch Nabakem", 
      "DC 3000 AAR Nabakem", 
      "Liên hệ", 
      '../../assets/img/product2.jpeg' 
      ),
    new Product(
      3, 
      "PMC-5 HÓA CHẤT TẨY RỬA KHUÔN NABAKEM", 
      "PMC -5 NABAKEM", 
      "Liên hệ", 
      '../../assets/img/product4.jpeg'
       ),
    new Product(
      4, 
      "Máy đo chiều dày vật liệu qua lớp phủ PosiTector UTG M1", 
      "PosiTector UTG M1", 
      "Liên hệ", 
      '../../assets/img/product5.jpeg'
        ),
    new Product(
      5, 
      "Đầu ghi nhiệt độ Chino 12 điểm ghi EH3215-001", 
      "", 
      "Liên hệ", 
      '../../assets/img/product4.jpeg'
        )

  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
