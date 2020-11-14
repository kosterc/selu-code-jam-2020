const joi = require('joi');

const User = joi.object({
    _id: joi.number().required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    password: joi.string().min(8).max(64).required(),
});

const UserGetDto = joi.object({
    _id: joi.number().required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
});

const UserUpdateDto = joi.object({
    _id: joi.number().required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    password: joi.string().min(8).max(64).required(),
});

const UserCreateDto = joi.object({
    _id: joi.number().required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    password: joi.string().min(8).max(64).required(),
});

module.exports = {
    User,
    UserGetDto,
    UserUpdateDto,
    UserCreateDto
}