const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    round:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "Round"
    },
    correctAns:{
        type:String,
        // required:[true, 'Please enter encoded answer string!']
    },
    statement: {
        type:String,
        required:[true, 'Please fill the question statement!'],
    },
    options:{
        type:Array,
        default:[],
    },
})  

mongoose.model('Question',questionSchema)