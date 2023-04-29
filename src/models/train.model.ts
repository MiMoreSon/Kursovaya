import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Train extends Model<Train> {
  @Column
  name: string;

  @Column
  capacity: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}