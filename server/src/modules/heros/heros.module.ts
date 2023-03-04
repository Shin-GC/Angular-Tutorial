import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import { DatabaseModule } from '../../commons/database/database.module';
import { HerosRepository } from './repositorys/heros.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hero } from './entities/hero.entity';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Hero])],
  controllers: [HerosController],
  providers: [HerosService, HerosRepository],
})
export class HerosModule {}
