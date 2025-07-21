//here we write methods(functionality) which will be used in bootcamps routes

//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public(means anyone can access this route)
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    });
}

//@desc    Get single bootcamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Show bootcamp with ID ${req.params.id}`
    });
}

//@desc    Create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private
exports.createBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Create new bootcamp'
    });
}
//@desc    Update bootcamp with ID
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update bootcamp with ID ${req.params.id}`
    });
}
//@desc    Delete bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp with ID ${req.params.id}`
    });
}
