const express = require('express');
const usersRouter = express.Router();

// Get All Users
usersRouter.get('/', (req, res) => {
    res.status(200).send({
        Status: 200,
        Message: 'Not Implemented'
    });
});

// Create User
usersRouter.post('/', (req, res) => {
    res.status(200).send({
        Status: 200,
        Message: 'Not Implemented'
    })
});

// Get User By ID
usersRouter.get('/:id', (req, res) => {
    res.status(200).send({
        Status: 200,
        Message: 'Not Implemented'
    });
});

// Update User By ID
usersRouter.put('/:id', (req, res) => {
    res.status(200).send({
        Status: 200,
        Message: 'Not Implemented'
    });
});

// Delete User by ID
usersRouter.delete('/:id', (req, res) => {
    res.status(200).send({
        Status: 200,
        Message: 'Not Implemented'
    });
});

module.exports = usersRouter;