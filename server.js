const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger'); 
const morgan = require('morgan');


// Route files
const bootcamps = require('./router/bootcamps');

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

const app = express();



// Dev logging middleware
// app.use(logger); //this is the custom logger middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //this is the morgan logger middleware
}



// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
