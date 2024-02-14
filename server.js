const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Redirect from root to /purple-honey
app.get('/', (req, res) => {
  res.redirect(301, '/purple-honey.html');
});

// Route for /purple-honey
app.get('/purple-honey.html', (req, res) => {
  // Your logic for rendering the content for /purple-honey goes here
  res.send('This is the content for /purple-honey');
});

// Set up the 'public' directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
