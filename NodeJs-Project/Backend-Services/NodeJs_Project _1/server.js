const express = require('express');
const cors = require('cors');
const http = require('http');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// Initialize app
const app = express();

// Middleware
app.use(cors());

// Routes
app.get('/one-service/getDetails', (req, res) => {  
  res.send(JSON.stringify({message: 'Response from service one'}));
});
app.get('/one-service/getInput/:input', (req, res) => {  
  res.send(JSON.stringify({message: `Input Response from service one is: ${req.params.input}`}));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
