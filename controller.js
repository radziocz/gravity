const { check, validationResult } = require('express-validator');

exports.home = (req, res) => {
    res.render('form')
}

exports.run = (req, res) => {
    res.render('space', {
        "mass_x": req.body.mass_x,
        "mass_y": req.body.mass_y,
        "x": req.body.x,
        "y": req.body.y,
        "x_speed_vector": req.body.x_speed_vector,
        "y_speed_vector": req.body.y_speed_vector
    })
}