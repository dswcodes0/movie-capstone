import { Movies } from './movies.js';
import { Users } from './users.js';

Users.hasMany(Movies, { as: 'movies', foreignKey: 'userId' });
Movies.belongsTo(Users, { as: 'users', foreignKey: 'userId' });

export { Movies, Users }; 