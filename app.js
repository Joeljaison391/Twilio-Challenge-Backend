const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const prisma = require('./database/db');

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));
app.use(helmet());
app.use(express.static('public'));


const ORIGIN_URLS = process.env.ORIGIN_URLS ? process.env.ORIGIN_URLS.split(',') : [];

const corsOptions = {
    origin: (origin, callback) => {
        if (ORIGIN_URLS.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};


app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/test/healthcheck', (req, res) => {
    console.log('Healthcheck endpoint hit');
    if(prisma){
        prisma.$connect();
        console.log('Database connected');
    }
    res.send('I am alive');
});

module.exports = app;
