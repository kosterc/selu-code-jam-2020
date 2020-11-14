const joi = require('joi');

var Lecture = joi.object({
    id: joi.number().required(),
    courseId: joi.number().required(),
});

module.exports = Lecture;