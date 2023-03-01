import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Hero extends Model {
  @Column
  id: number;
  @Column
  name: string;
}
