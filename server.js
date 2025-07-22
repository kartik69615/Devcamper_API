const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error'); // Assuming you have an error handler middleware
const connectDB = require('./config/db');

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

// Connect to the database
connectDB();


// Route files
const bootcamps = require('./router/bootcamps');

const app = express();

//body parser
app.use(express.json()); // Parse JSON bodies


// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //this is the morgan logger middleware
}


// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


// Error handling middleware : Must be after all bootcamps routes
app.use(errorHandler);


const PORT = process.env.PORT || 5000;


// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});
