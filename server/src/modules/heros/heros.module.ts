import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import { DatabaseModule } from '../../commons/database/database.module';
import { Hero } from './entities/hero.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [HerosController],
  providers: [HerosService, Hero],
})
export class HerosModule {}
