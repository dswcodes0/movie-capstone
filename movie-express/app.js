import express from 'express';
import { sequelize } from './database.js';
import { Users, Movies } from './modules/index.js';

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies from HTTP requests

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a user by id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all movies
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movies.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new movie
app.post('/movies', async (req, res) => {
  try {
    const movie = await Movies.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

sequelize.sync({ alter: true })
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
