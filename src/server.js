const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0-ky2dx.mongodb.net/cdl?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);