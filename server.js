'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});



app.get('/health-check',(req,res)=> {
  res.send ("Health check passed");
});

app.get('/ready',(req,res)=> {
  res.send ("Ready check passed");
});

app.get('/bad-health',(req,res)=> {
  res.status(500).send('Health check did not pass');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});