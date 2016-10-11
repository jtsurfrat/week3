import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';

import routes from './routes/index';
import users from './routes/users';
//import actors from './routes/actors';
// added
import products from './routes/products';
import things from './routes/things';

let app = express();

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

//app.use('/products', products);

//app.use('/actors', actors);
// app.use, defines middleware

app.use('/things', things);


// APIs
app.use('/api', require('./api/makes'));
app.use('/api', require('./api/cars'));
app.use('/api', require('./api/movies'));
app.use('/api', require('./api/genres'));
app.use('/api', require('./api/guestbook'));
app.use('/api', require('./api/deepThought'));

// Intro to middleware

// app.use("/testing", (req, res, next) => {
//   console.log("hello");
//   next();
// })
//
// app.use((req, res, next) => {
//   console.log("hello again");
//   res.send("All done");
// })


//Specifying a mount path
app.use('/hello', (req, res) => {
  res.send("hello");
})

app.use('/bye', (req, res) => {
  res.send("bye");
});

//Passing multiple middleware functions

app.use("/testing", (req, res, next) => {
  console.log("hello");
  next();
},
(req, res, next) => {
  console.log("hello again");
  res.send("All done")
})


//Another example of passing multiple midleware functions

// function checkForSecretKey(req, res, next){
//   let secret = req.query['secret'];
//   if(secret !== "tacos"){
//     res.status(401).send("You are not authorized")
//   } else {
//     next();
//   }
// }
// app.get("/plansForWorldDomination", checkForSecretKey, (req, res) => {
//   res.send("The secret plan to steal the statue of liberty");
// });
//
// let products = [
//   {id:1, name:'Coffee', price: 2.33},
//   {id:2, name :"Cheese", price: 3.33}
// ]
//
// function lookupProduct(req, res, next){
//   let productId = req.params['id'];
//   let matches = products.filter((product) =>  product.id == productId)
//   if(!matches.length){
//     res.status(404).send(`No matching products for id, ${productId}`)
//   } else {
//     res.locals.product = matches[0];
//     next();
//   }
// }

// app.get("/productName/:id", lookupProduct, (req, res) => {
//   let product = res.locals.product;
// res.send(`This product is named ${product.name}`)
// });
//
// app.get("/productPrice/:id", lookupProduct, (req, res) => {
//   let product = res.locals.product;
//   res.send(`Product costs $${product.price}`);
// })
//
//
// // redirect 404 to home for the sake of AngularJS client-side routes
// app.get('/*', function(req, res, next) {
//   if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
//     return next({ status: 404, message: 'Not Found' });
//   } else {
//     return res.render('index');
//   }
// });

//////////////////////////////////////////////////////
// errro handling with midleware

// app.get("/test", (req, res, next) => {
//   console.log("midleware#1");
//   next("Oops, something went horribly wrong");
// });
//
// //middleware not called
// app.get("/test", (req, res, next) => {
//   console.log("middleware#2");
//   next("Oops, something went horribly wrong")
// });
//
// // Error midleware function
// app.use((err:Error, req, res, next) => {
//   console.log(`Error middleware: ${err}`);
//   res.end();
// });


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
