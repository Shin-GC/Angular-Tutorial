import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';
import { HerosRepository } from './repositorys/heros.repository';

@Injectable()
export class HerosService {
  constructor(private readonly herosRepository: HerosRepository) {}
  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  async findAll(): Promise<Hero[]> {
    try {
      return this.herosRepository.findAll();
    } catch (e) {
      console.error(e);
    }
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
