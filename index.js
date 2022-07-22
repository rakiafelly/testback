const express = require('express'); 
const cors=require('cors');
const app = express();
const session=require('express-session');
const port = 3000;
const passport=require('passport')
const dotenv=require('dotenv');
//config dotenv
dotenv.config({ debug: process.env.DEBUG });

//connect to database
require('./database/connect')
// use passport
require('./passport/passport');
app.use(express.json())
app.use(cors());
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,}));
app.use(passport.initialize());
app.use(passport.session());
const authApi=require('./routes/authApi');
const categoryApi=require('./routes/categoryApi');
const livreApi=require('./routes/livreApi');
const clientApi=require('./routes/clientApi');

//use routes
app.use('/api/v1', authApi);
app.use('/api/v1', categoryApi);
app.use('/api/v1', livreApi);
app.use('/api/v1',clientApi);

// listen to the port
app.listen(port, () => {
    console.log(`bib app listening on port ${port}`)
  })