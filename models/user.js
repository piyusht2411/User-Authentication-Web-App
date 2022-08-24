const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 24

    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        min: 100000000,
        max: 999999999

    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);
module.exports = User;