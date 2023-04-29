import { Model,Table, Column, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Train } from './train.model';
import { Station } from './station.model';

@Table
export class Trip extends Model<Trip> {
  @ForeignKey(() => Train)
  @Column(DataType.INTEGER)
  trainId!: number;

  @ForeignKey(() => Station)
  @Column(DataType.INTEGER)
  departureStationId!: number;

  @ForeignKey(() => Station)
  @Column(DataType.INTEGER)
  arrivalStationId!: number;

  @Column(DataType.DATE)
  departureTime!: Date;

  @Column(DataType.DATE)
  arrivalTime!: Date;

  @BelongsTo(() => Train)
  train!: Train;

  @BelongsTo(() => Station, 'departureStationId')
  departureStation!: Station;

  @BelongsTo(() => Station, 'arrivalStationId')
  arrivalStation!: Station;

  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;
}
