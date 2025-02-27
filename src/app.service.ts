import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS!';
  }

  getName(): string {
    return 'Vladimir Ilenko';
  }

  getinformation(): string {
    return 'I am Vladimir and I am 16 years old';
  }

  getJson() {
    return {
      name: 'Vladimir',
      lastname: 'Ilenko',
      age: 16,
    };
  }
  getJson2() {
    return {
      name: 'Vladimir2',
      lastname: 'Ilenko2',
      age: 16,
    };
  }
  getGit(): string {
    return 'git and github using';
  }
  getPostman(): string {
    return 'We use postman';
  }
}

