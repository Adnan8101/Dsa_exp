const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the DSA experiments text file as plain text
app.get('/', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'Dsa experiments.txt');
        const content = fs.readFileSync(filePath, 'utf8');
        
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send(content);
    } catch (error) {
        res.status(500).send('Error reading file: ' + error.message);
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
