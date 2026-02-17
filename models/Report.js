const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
        address: {
            type: String
        }
    },
    animalType: {
        type: String,
        enum: ['dog', 'cat', 'bird', 'other'],
        default: 'other'
    },
    urgency: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Report', reportSchema);
