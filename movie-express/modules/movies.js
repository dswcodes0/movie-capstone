import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const Movies = sequelize.define('Movies', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ratings: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});
