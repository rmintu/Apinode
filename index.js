const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Define an endpoint that fetches data from the external API
app.get('/api/products', async (req, res) => {
  try {
    // Make a GET request to the external API
    const response = await axios.get('https://fakestoreapi.com/products');

    // Send the response data to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from the API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
