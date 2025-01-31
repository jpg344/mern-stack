const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        required: true
    },
    chapterName: {
        type: String,
        required: true
    }
});

module.exports = Content = mongoose.model('content', ContentSchema);