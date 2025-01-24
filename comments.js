// Create web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

app.get('/comments/new', (req, res) => {
  res.send('This is the new comments route');
});

app.get('/comments/:id', (req, res) => {
  res.send(`This is the comments route with id ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});