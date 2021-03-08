const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const axios = require('axios');
require('../../models/user');
require('../../models/classroom');
require('../../models/session');
require('../../models/round');
require('../../models/user_attendance'); 
require('../../models/question');

const User = mongoose.model('User');
const Question = mongoose.model('Question');
const Classroom = mongoose.model('Classroom');
const Session = mongoose.model('Session');
const Round = mongoose.model('Round');
const UserAttendence = mongoose.model('UserAttendence');
const authenticate = require('../../middleware/authenticate')
const restrictTo = require('../../middleware/restrictTo')

router.post("/teacher/:userId/classroom/:classroomId",async (req,res) => {
    try {
        // const user = await User.findOne({ _id: req.params.userId})
        var classroom = await Classroom.findOne({_id: req.params.classroomId}).populate([{
            path: 'sessions',
            select:'_id createdAt sessionName ',
        },{
            path: 'students',
            select:'_id firstName lastName email',
        }])
        
        res.status(200).json({done: true,classroom}) 
    } catch (error) {
        console.log(error);
    }
})
router.post("/user/:userId/classroom/:classroomId/session/:sessionId",async (req,res) => {
    try {
        var session = await Session.findOne({_id: req.params.sessionId}).populate([{
            path: 'attendedStudents.id',
            select:'_id firstName lastName',
        },{
            path: 'round',
            populate:[{path:'attemptedStudents', select:'_id firstName lastName'},{path:'correctStudents', select:'_id firstName lastName'}],
            select:'_id attemptedStudents correctStudents',
        }])
        
        res.status(200).json({done: true,session})
    } catch (error) {
        console.log(error);
    }
})
// create a classroom
router.post('/user/:userId/createClassroom',async (req,res)=>{
    try {
        const {link,className} = req.body
        const classroom = await Classroom.create({link,className,teacher:req.params.userId})
        var teacher = await User.findOne({ _id:req.params.userId})
        teacher.classrooms.push(classroom._id)
        teacher.save(err=>{console.log(err)})
        res.status(200).json({done: true,classroom})
    } catch (error) {
        console.log(error)
    }
})
//upload pdfs
// router.post('/uploadpdf/:session/:sessionId',async (req,res)=>{
//     try {
//         const {classNote} = req.body
//         if(classNote){
//             var session = await Sesssion.findOne({_id: req.params.sesssionId})
//             session.classNote = classNote;
//             session.save(err=>{
//                 console.log(err)
//             })
//         }
//     } catch (error) {
        
//     }
// })
// create a session
router.post('/user/:userId/classroom/:classroomId/createSession',async (req,res)=>{
    try {
        let {cutoff,sessionName,classNote} = req.body
        cutOff = parseInt(cutoff)
        const session = await Session.create({cutoff,sessionName,teacher:req.params.userId,classNote})
        var classroom = await Classroom.findOne({_id:req.params.classroomId})
        classroom.sessions.push(session._id)
        classroom.save(err=>{console.log(err)})
        res.status(200).json({done: true,session})
    } catch (error) {
        console.log(error)
    } 
})
// create a round
router.post('/user/:userId/classroom/:classroomId/session/:sessionId/createRound',async (req,res)=>{
    try {
        let {pageNumber} = req.body
        pageNumber = parseInt(pageNumber)
        var rques=[];
        var session = await Session.findOne({_id: req.params.sessionId})
        var classroom = await Classroom.findOne({_id:req.params.classroomId})
        // console.log("ass",session.botCollected);
        // if(session.botCollected.length<1){
        //     // axios.post('/postAttendance', {
        //     //     pageNumber,
        //     //     classNote: session.classNote
        //     //   })
        //     //   .then(function (response) {
                
        //     //   })
        //     //   .catch(function (error) {
        //     //     console.log(error);
        //     //   });
        //     // api call to Flask_Server and then save it to botcollected of session
        //     // console.log("haaaahua");
        //     session.botCollected=["raliya ssaa","Kartik Verma"]
        //     session.save(err=>{
        //         console.log(err);
        //     })
        // }
        if(session.botCollected.length<1){
            // session.botCollected=["Kartik Verma","Mandeep Singh","namuna kan"]
            const respo = await axios.post('http://localhost:5000/postAttendance/', {link:classroom.link})
            session.botCollected = respo.data.present
            console.warn("This is bot collected")
            console.log(respo.data.present)
                session.save(err=>{
                    console.log(err);
                })
        } 
        
        var questions = await axios.post('http://localhost:5000/postQuestions/',{pageNumber:pageNumber,classNote: session.classNote})
        // var questions = [
        //     {
        //         correctAns:"a",
        //         statement:"asdfghj",
        //         options:["a","b"]
        //     },
        //     {
        //         correctAns:"b",
        //         statement:"qwedfghj",
        //         options:["a","b"]
        //     }
        // ]// Flask_Server question received
        const round = await Round.create({pageNumber})  
        for (const question of questions.data) {
            const cquestion = await Question.create({round:round._id,correctAns:question.correctAns,statement:question.statement,options:question.options})
            rques.push(cquestion._id)
        }
        classroom.tempQuestions = rques
        classroom.save(err=>{
            console.log(err)
        });
        round.questions = rques
        round.save(err=>{
            console.log(err)
        })
        res.status(200).json({done: true,round})
    } catch (error) {
        console.log(error)
    }
})
// end a round
router.post('/user/:userId/classroom/:classroomId/session/:sessionId/endRound/:roundId',async (req,res)=>{
    try {
        var classroom = await Classroom.findOne({_id:req.params.classroomId})
        classroom.tempQuestions = [];
        classroom.save(err=>{
            console.log(err)
        });
        var session = await Session.findOne({_id: req.params.sessionId})
        session.rounds.push(req.params.roundId)
        session.save(err=>{
            console.log(err)
        })
        var round = await Round.findOne({_id: req.params.roundId}).populate('questions').populate([{path:'attemptedStudents', select:'_id firstName lastName'},{path:'correctStudents', select:'_id firstName lastName'}])

        res.status(200).json({done: true,round})
    } catch (error) {
        console.log(error)
    }
})
// end a session
router.post('/user/:userId/classroom/:classroomId/endSession/:sessionId',async (req,res)=>{
    try {
        // var classroom = await Classroom.findOne({_id:req.params.classroomId})
        let meetStu = new Map();
        var session = await Session.findOne({_id: req.params.sessionId}).populate('rounds')
        // console.log(session)
        for (const stu of session.botCollected) {
            var name = stu.split(' ')
            // console.log(name[0],name[1],name,typeof(name[0]))
            const student = await User.findOne({firstName: name[0],lastName: name[1]}) 
            // console.log("stuId", student._id) 
            if(student !== null && meetStu.has(student._id.toString())===false){
                meetStu.set(student._id.toString(),true)
            }
        }
        // for (const [key, value] of meetStu.entries()) {
        //     console.log(typeof(key), value);
        //   }
        let attentionMap = new Map()
        let understandingMap = new Map()
        var n = session.rounds.length
        for (const round of session.rounds) {
            // console.log(round);
            for (const attlist of round.attemptedStudents) {
                console.log(meetStu.has(attlist.toString()))
                if(meetStu.has(attlist.toString())){
                    console.log("att")
                    if(attentionMap.has(attlist.toString())){
                        var score = attentionMap.get(attlist.toString())
                        score+0.75;
                        console.log("attention", attlist.toString(),score)
                        attentionMap.set(attlist.toString(),score)
                    }else{
                        // console.log("attention", attlist.toString()) 
                        attentionMap.set(attlist.toString(),0.75)
                        console.log("attention", attlist.toString(),attentionMap.get(attlist.toString()),typeof(attentionMap.get(attlist.toString())))
                    } 
                    if(understandingMap.has(attlist.toString())){
                        
                        var score = understandingMap.get(attlist.toString())
                        score+0;
                        console.log("attention", attlist.toString(),score)
                        understandingMap.set(attlist.toString(),score)
                    }else{
                        console.log("attention", attlist.toString())
                        understandingMap.set(attlist.toString(),0)
                        console.log("attention", attlist.toString(),understandingMap.get(attlist.toString()),typeof(understandingMap.get(attlist.toString())))
                    }
                }else{
                    console.log("attention", attlist.toString())
                    understandingMap.set(attlist.toString(),0)
                    attentionMap.set(attlist.toString(),0)
                }
            }
            for (const corrlist of round.correctStudents) {
                console.log(meetStu.has(corrlist.toString()))
                if(meetStu.has(corrlist.toString())){
                    console.log("corr")
                    if(understandingMap.has(corrlist.toString())){
                        var score = understandingMap.get(corrlist.toString())
                        score+1;
                        console.log("understanding", corrlist.toString(),score)
                        understandingMap.set(corrlist.toString(),score)
                    }else{
                        understandingMap.set(corrlist.toString(),1)
                        console.log("understanding", corrlist.toString())
                        
                    }
                    if(attentionMap.has(corrlist.toString())){
                        var score = attentionMap.get(corrlist.toString())
                        score+1;
                        console.log("understanding", corrlist.toString(),score)
                        attentionMap.set(corrlist.toString(),score)
                    }else{
                        attentionMap.set(corrlist.toString(),1)
                    }
                    
                }else{
                    understandingMap.set(corrlist.toString(),0)
                    attentionMap.set(corrlist.toString(),0)
                }
            }
            var attendedStudents = [],ta=0,tu=0
            for (const [i, value] of meetStu.entries()){
                // console.log("i",i)
                var score1 = attentionMap.get(i.toString())===undefined ? 0 : attentionMap.get(i.toString())
                ta+=score1
                var score2 = understandingMap.get(i.toString())===undefined ? 0 : understandingMap.get(i.toString())
                tu+=score2
                // console.log(typeof((score1/n)*100),typeof((session.cutoff)))
                var pr = ((score1/n)*100>=session.cutoff ? true : false)
                console.log("i ka info",score1,score2,pr)
                if(pr){
                    let u = await UserAttendence.findOne({studentId: i.toString()})
                    console.log(u);
                    u.attendedSessions.push({sessionId:session._id,attention:score1/n})
                    u.save(err=>{
                        console.log(err)
                    }) 
                }
                var obj = {
                    id:i,
                    understanding:(score2/n)*100,
                    attentiveness:(score1/n)*100,
                    present:pr
                }
                attendedStudents.push(obj)
            }
            // console.log("attendedstude arr ",attendedStudents)
            var tn = meetStu.size
            session.sessionEnd = true
            session.attentiveness = (ta/tn)*100
            session.understanding = (tu/tn)*100
            session.attendedStudents = attendedStudents
            session.save(err=>{
                console.log(err)
            })
            // classroom.sessions.push(session)
            // classroom.save(err=>{console.log(err)})

        }
        res.status(200).json({done: true,session})
    } catch (error) {
        console.log(error)
    }
})


module.exports=router