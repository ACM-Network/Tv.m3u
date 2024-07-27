const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to serve the M3U file
app.get('/stream', async (req, res) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/ACM-Network/Tv.m3u/main/ACM%20Network.m3u');
    res.setHeader('Content-Type', 'application/x-mpegURL');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the M3U file');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
