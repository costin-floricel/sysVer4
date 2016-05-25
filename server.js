// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var path = require('path');

// configuration ===========================================
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url); 

require('./config/passport')(passport); // pass passport for configuration


var usersRoutes = require('./routes/usersRoutes');
var contentRoutes = require('./routes/contentRoutes');
var tagsRoutes = require('./routes/tagsRoutes');
var categoriesRoutes = require('./routes/categoriesRoutes');
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// set up jade for templating
    app.set("views", path.join(__dirname, "/public/views"));
    app.set("view engine", "jade");
    app.use(express.static(path.join(__dirname, '/public/views')));
    


// required for passport
app.use(session({ secret: 'secretpassword' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./routes.js')(app,passport); // load our routes and pass in our app and fully configured passport

// start app ===============================================
app.use('/api/admin/users', usersRoutes);
app.use('/api/admin/content', contentRoutes);
app.use('/api/admin/tags', tagsRoutes);
app.use('/api/admin/categories', categoriesRoutes);

// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;