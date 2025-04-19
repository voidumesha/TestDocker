const express = require('express');

const app = express();
const port = 8080;

// Define a GET endpoint
app.get('/', (req, res) => {
    console.log('Received a GET request', req);
    res.send('Hello, World!');
});
// Define a POST endpoint
app.post('/submit', (req, res) => {
    console.log('Received a POST request', req.body);
    res.send('POST request received!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});