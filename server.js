'use strict';

const express = require('express');
const path = require('path');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

const publicDirectoryPath = path.join(__dirname, '/assets');
app.use(express.static(publicDirectoryPath));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
