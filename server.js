const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://screer:Slc2018GilAZ@cluster0.brokn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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