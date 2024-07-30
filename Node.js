const express = require('express');
const request = require('request');
const app = express();

app.get('/stream', (req, res) => {
  // Check if request comes from an allowed user-agent or IP
  if (req.headers['user-agent'].includes('NetworkStreamApp')) {
    request('https://raw.githubusercontent.com/ACM-Network/Tv.m3u/main/ACM%20Network.m3u').pipe(res);
  } else {
    res.status(403).send('Forbidden');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
