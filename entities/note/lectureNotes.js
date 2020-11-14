const joi = require('joi');

var LectureNotes = joi.object({
    id: joi.number().required(),
    noteId: joi.number().required(),
    lectureId: joi.number().required()
});

module.exports = LectureNotes;