import { Module } from '@nestjs/common';
import { SnackController } from './app.controller';
import { SnackService } from './snack.service';

@Module({
  imports: [],
  controllers: [SnackController],
  providers: [SnackService],
})
export class AppModule {}
