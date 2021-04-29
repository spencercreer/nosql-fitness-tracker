const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  uri || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require('./routes/html-routes'));
app.use(require('./routes/api-routes'));

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});