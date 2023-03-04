import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'hero',
  timestamps: false, // timestamps 옵션 설정
})
export class Hero extends Model {
  @Column({ primaryKey: true })
  id: number;
  @Column
  name: string;
}
