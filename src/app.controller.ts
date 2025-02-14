import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname') //localhost:3000/showname
  showName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation') //localhost:3000/showinformation
  getinformation(): string {
    return this.appService.getinformation();
  }
  
  @Get('/showjson') //localhost:3000/showjson
  getJson() {
    return this.appService.getJson();
  }
@Get('/showjson2')//localhost3000/showjson2
getJson2(){ 
  return this.appService.getJSon2();
}
}
