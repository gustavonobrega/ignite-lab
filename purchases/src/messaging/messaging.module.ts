import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaService } from './kakfa.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
