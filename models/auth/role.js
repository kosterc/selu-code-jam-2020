const joi = require('joi');

const Role = joi.object({
    _id: joi.number().required(),
    name: joi.string().required()
});

module.exports = {
    Role
}