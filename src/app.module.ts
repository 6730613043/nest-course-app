import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';
import { ChatService } from './chat/chat.service';
import { OrderController } from './order/order.controller';
import { ChatController } from './chat/chat.controller';
import { UserModule } from './user/user.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';

@Module({
  imports: [ProductModule, UtilityModule, OrderModule, UserModule, GlobalHelperModule],
  controllers: [AppController, OrderController, ChatController],
  providers: [AppService, OrderService, ChatService],
})
export class AppModule {}
