import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Station extends Model<Station> {
  @Column
  name: string;

  @Column
  city: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}