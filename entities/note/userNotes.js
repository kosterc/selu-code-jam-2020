const joi = require('joi');

var UserNotes = joi.object({
    id: joi.number().required(),
    noteId: joi.number().required(),
    userId: joi.number().required()
});

module.exports = UserNotes;