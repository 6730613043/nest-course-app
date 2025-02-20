import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Hello from product service';
  }

  productFunc2(): string {
    return 'Hello from product service2';
  }
  productJSON() {
    return {
        name: "Vladimir",
        age: 16,
        hobby: "gym",
    }
  }
}
