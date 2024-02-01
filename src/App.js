import logo from './logo.svg';
import './App.css';

// Your main application file (e.g., app.js)

const express = require('express');
const facebookConversions = require('./src/utils/fbConversions');

const app = express();

// Your other routes and middleware...

// Example route triggering Facebook PageView event
app.get('/', (req, res) => {
  // Your route logic...

  // Trigger Facebook PageView event
  facebookConversions.trackPageView();

  // Send response...
});

// Example route triggering Facebook ViewContent event
app.post('/view-content', (req, res) => {
  const { contentId, contentType, value } = req.body;

  // Your route logic...

  // Trigger Facebook ViewContent event with custom parameters
  facebookConversions.trackViewContent(contentId, contentType, value);

  // Send response...
});

// Start the server...


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
