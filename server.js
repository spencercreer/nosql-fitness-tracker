const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/api-routes.js'));

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});