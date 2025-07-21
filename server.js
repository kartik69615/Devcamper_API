const express = require('express');
const dotenv = require('dotenv');


// Route files
const bootcamps = require('./router/bootcamps');

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/v1/bootcamps', bootcamps);


app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
