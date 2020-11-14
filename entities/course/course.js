const joi = require('joi');

var Course = joi.object({
    id: joi.number().required(),
    professorId: joi.number().required(),
})

module.exports = Course;