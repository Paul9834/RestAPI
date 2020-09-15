var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users-route');

var app = express();


// Import manager
const dbManager = require("./database/db-manager");



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


dbManager.sequelizeConnection.authenticate().then(
    () => {
        console.log("***Connected***");
        dbManager.sequelizeConnection.sync().then(
            () => {
                console.log('Database synced')
            }

        );
    }
).catch (
    err => {
        console.log("Failed", err.message)
    }
);




module.exports = app;
