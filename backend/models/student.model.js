const mongoose = require('mongoose');

///Database Schema
const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;