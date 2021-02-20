const mongoose = require('mongoose')
var { nanoid } = require("nanoid");
// var slug = require('mongoose-slug-generator');
// mongoose.plugin(slug)

const classroomSchema = new mongoose.Schema({
    link:{ type:String},
    className:{ type:String, required:true},
    classId:{
        type: String,
        default: () => nanoid(5)
    },
    // slug: { type: String, slug: "classId" },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    }], 
    sessions:[{ 
        type: mongoose.Schema.Types.ObjectId,
            ref: "Session"
    }],
    tempQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
    }],
    createdAt: { type: Date, default: Date.now },

})

mongoose.model('Classroom',classroomSchema)