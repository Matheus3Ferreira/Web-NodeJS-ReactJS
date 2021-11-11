const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/students'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/students/' }),
);

app.listen(process.env.PORT || 8080);