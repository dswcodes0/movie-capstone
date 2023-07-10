import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('movieDatabase', 'jswcodes', 'Samuel420', {
  host: 'localhost',
  dialect: 'postgres'
});