const mongoose = require('mongoose')
const sessionSchema = new mongoose.Schema({
    sessionName:{ type:String},
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    //info of all students present in meet 
    attendedStudents: [{
        id:{type: mongoose.Schema.Types.ObjectId,ref: "User"},
        understanding:{type:Number},
        attentiveness:{type:Number},
        present:{type:Boolean,default:true}
    }], 
    rounds:[{ 
        type: mongoose.Schema.Types.ObjectId,
            ref: "Round"
    }],
    sessionEnd:{ type:Boolean, default: false},
    attentiveness:{type:Number},
    understanding:{type:Number},
    classNote:{ type:String},
    botCollected:[{ type:String}],
    cutoff:{ type:Number},
    createdAt: { type: Date, default: Date.now },

})
    
mongoose.model('Session',sessionSchema)