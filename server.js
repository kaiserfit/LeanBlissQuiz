const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

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
