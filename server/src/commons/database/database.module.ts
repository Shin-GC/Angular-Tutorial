import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Hero } from '../../modules/heros/entities/hero.entity';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Hero]),
  ],
})
export class DatabaseModule {}
