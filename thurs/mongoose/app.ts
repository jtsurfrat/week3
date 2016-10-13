import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
//import * as mongoose from "mongoose";
import * as mongoose from 'mongoose';


import routes from './routes/index';
import users from './routes/users';


////// importing database////////////////////
import Database from './db';
Database.connect();
let db  = mongoose.connection;

// mongoose.connection.collections['collectionsName'].drop(f)
// mongoose.connection.collections["Actors"].drop(() => {
//   console.log("drop");
// })

import Actor from './moviesSchema';

Actor.create({
  firstName: "Carrie",
  lastName: "Fisher"
},
{
  firstName: "Harrison",
  lastName: "Ford"
}).then(() => {
  console.log("Actor Created")
}).catch((err) => {
  console.log(err)
})

let app = express();

mongoose.connection.on('open', function(){
    mongoose.connection.db.dropDatabase(function(err){
    console.log("worked!");
    let carrie = new Actor();
    carrie.firstName = "Carrie";
    carrie.lastName = "Fisher"
    carrie.save().then(() => {
      console.log("save actor")
    }).catch((err)=>{console.error(err)})
    });
});

// let carrie = new Actor();
// carrie.firstName = 'Carrie';
// carrie.lastName = 'Fisher';
// carrie.save().then(() => {
//   console.log('saved actor');
// }).catch((err)=> {
//   console.error(err)
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/api', express.static(path.join(__dirname, 'api')));

app.use('/', routes);
app.use('/users', users);


// APIs
app.use('/api', require('./api/makes'));
app.use('/api', require('./api/cars'));
app.use('/api', require('./api/movies'));
app.use('/api', require('./api/genres'));
app.use('/api', require('./api/guestbook'));
app.use('/api', require('./api/deepThought'));

// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err:Error, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err:Error, req, res, next) => {
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export = app;
