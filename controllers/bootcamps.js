//here we write methods(functionality) which will be used in bootcamps routes

const Bootcamp = require('../models/Bootcamps');

//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public(means anyone can access this route)
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Error fetching bootcamps"
        });
    }

    // res.status(200).json({
    //     success: true,
    //     message: 'Show all bootcamps'
    // });
}

//@desc    Get single bootcamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                error: `Bootcamp not found with ID ${req.params.id}`
            });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Error fetching bootcamp"
        });
    }


    // res.status(200).json({
    //     success: true,
    //     message: `Show bootcamp with ID ${req.params.id}`
    // });
}


//@desc    Create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private
exports.createBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error: "duplicate creation of bootcamp not allowed"
        });
    }

    /* Theory : 
         We have made this function async because moogose create method returns a promise.
    */


    // --- IGNORE ---
    // console.log(req.body);
    // res.status(200).json({
    //     success: true,
    //     message: 'Create new bootcamp'
    // });
}


//@desc    Update bootcamp with ID
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                error: `Bootcamp not found with ID ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Error updating bootcamp"
        });
    }   
}


//@desc    Delete bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                error: `Bootcamp not found with ID ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Error deleting bootcamp"
        });
    }
}
