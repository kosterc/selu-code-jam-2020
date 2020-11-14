const joi = require('joi');

var Note = joi.object({
    id: joi.number().required(),
    lectureId: joi.number().required(),
    userId: joi.number().required()
});

module.exports = Note;