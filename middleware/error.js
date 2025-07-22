const errorHandler = (err, req, res, next) => {
  // Log the error to the console for debugging
  console.error(err.stack.red);
  
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error'
  });
}

module.exports = errorHandler;