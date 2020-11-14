const Course = require('./course/course');

const User = require('./auth/user');

const Lecture = require('./lecture/lecture');

const LectureNotes = require('./note/lectureNotes');
const UserNotes = require('./note/userNotes');
const Note = require('./note/note');

module.exports = {
    Course,
    User,
    Lecture,
    LectureNotes,
    UserNotes,
    Note
};