const mongoose = require('mongoose')
const roundSchema = new mongoose.Schema({
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
    }],
    attemptedStudents: [{
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    }],
    correctStudents: [{
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    }],
    pageNumber: {
        type:Number,
        required:[true, 'Please fill the page number!'],
    },    
    createdAt: { type: Date, default: Date.now },

})

mongoose.model('Round',roundSchema)