import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HerosService {
  constructor(
    @InjectModel(Hero)
    private heroModel: typeof Hero,
  ) {}
  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
