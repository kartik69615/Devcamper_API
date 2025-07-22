//here we write methods(functionality) which will be used in bootcamps routes

const ErrorResponse = require('../utils/errorResponse'); // Custom error response class
const asyncHandler = require('../middleware/async'); // Custom middleware for error handling
const Bootcamp = require('../models/Bootcamps');

//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public(means anyone can access this route)
exports.getBootcamps = asyncHandler(async (req, res, next) => {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
})

//@desc    Get single bootcamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
})


//@desc    Create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private
exports.createBootcamps = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });

    /* Theory : 
         We have made this function async because moogose create method returns a promise.
    */
})


//@desc    Update bootcamp with ID
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamps = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
})


//@desc    Delete bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        });
})
