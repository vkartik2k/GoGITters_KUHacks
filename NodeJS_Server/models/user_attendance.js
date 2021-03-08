const mongoose = require('mongoose')
const userAttendenceSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true, 'Please enter student id!']
    },
    classroom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Classroom",
        required:[true, 'Please enter classroom id!']
    },
    attendedSessions:[{
        sessionId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Session"
        },
        attention:{type:Number}, 
    }],    
    createdAt: { type: Date, default: Date.now },

})

mongoose.model('UserAttendence',userAttendenceSchema)