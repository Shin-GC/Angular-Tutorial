import { Module } from '@nestjs/common';
import { HerosModule } from './modules/heros/heros.module';
import { DatabaseModule } from './commons/database/database.module';

@Module({
  imports: [DatabaseModule, HerosModule],
})
export class AppModule {}
