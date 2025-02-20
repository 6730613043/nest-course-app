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
  @Get('/showjson2')//localhost:3000/showjson2
  getJson2()  {
    return this.appService.getJson2();
  }
  @Get('/showgit') //localhost:3000/showgit
  getGit(): string {
    return this.appService.getGit();
  }
  @Get('/usepostman') //localhost:3000/usepostman
  getPostman(): string {
    return this.appService.getPostman();
  }
}
