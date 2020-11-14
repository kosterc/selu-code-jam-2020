const joi = require('joi');

var User = joi.object({
    id: joi.number().required(),
    email: joi.string().email().required(),
})

module.exports = User;