import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hero } from '../entities/hero.entity';

@Injectable()
export class HerosRepository {
  constructor(
    @InjectModel(Hero)
    private heroModel: typeof Hero,
  ) {}
  async findAll(): Promise<Hero[]> {
    return this.heroModel.findAll();
  }
}
