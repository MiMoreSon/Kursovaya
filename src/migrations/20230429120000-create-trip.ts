import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('trips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    trainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'trains',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    departureStationId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'stations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    arrivalStationId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'stations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    departureTime: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    arrivalTime: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('trips');
}