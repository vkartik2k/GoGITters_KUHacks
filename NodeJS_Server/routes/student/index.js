const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

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

// all classrooms list of user common for teacher and student
router.post("/user/:userId/classrooms",async (req,res) => {
    try {
        const user = await User.findOne({_id: req.params.userId}).populate({
            path:'classrooms',
            populate:{path:'teacher',select:'_id firstName lastName'},
            select:' _id className classId',
        })
        if(user){
            const classrooms = user.classrooms
            res.status(200).json({done: true,classrooms})
        }
        else{
            res.status(422).json({done: false,error:"user doesnt exist"})
        }
    } catch (error) {
        console.log(error);
    }
})
// info of classroom
router.post("/user/:userId/classroom/:classroomId",async (req,res) => {
    try {
        var classroom = await Classroom.findOne({_id: req.params.classroomId}).populate([{
            path: 'sessions',
            select:'_id rounds createdAt sessionName sessionEnd',
        },{path:'teacher',select:'firstName lastName'}]).populate('tempQuestions')
        if(classroom){
            const userAttendence = await UserAttendence.findOne({studentId: req.params.userId, classroom:req.params.classroomId}).populate({path:'attendedSessions.sessionId',select: 'sessionName'})
            var currentSession = null;
            for (const session of classroom.sessions) {
                if(!session.sessionEnd){
                    currentSession = session
                    console.log("ubdubbgiubfrh",session.sessionEnd)
                }
            }
            var attention=0,l=userAttendence.attendedSessions.length;
            for (const att of userAttendence.attendedSessions) {
                attention+=att.attention
            }
            attention = (attention/l)*100;
            var attendence = (l/classroom.sessions.length)*100
            console.log(attention,attendence,userAttendence,currentSession)
            res.status(200).json({done: true,classroom,attention,attendence,userAttendence:userAttendence.attendedSessions,currentSession})
    
        }else{
            res.status(422).json({done: false,error:"classroom doesnt exist"})
         }
        } catch (error) {
        console.log(error);
    }
})

router.post('/user/:userId/round/:roundId',async (req,res)=>{
    try {
        const {correct} = req.body
        const round  = await Round.findOne({ _id: req.params.roundId})
        if(correct){
            round.correctStudents.push(req.params.userId)
        }else{
            round.attemptedStudents.push(req.params.userId)
        }
        round.save(err=>{
            console.log(err)
        })
        res.status(200).json({done: true,message:`answer submitted to this round`})
    } catch (error) {
        console.log(error)
    }
})

// join a classroom
router.post('/user/:userId/joinclassroom',async (req,res)=>{
    try {
        const classroom  = await Classroom.findOne({ classId:req.query.slug})
        if(classroom){
            if(classroom.students.includes(req.params.userId.toString())){
                res.status(422).json({done: false,message:`classroom with Id ${classroom.classId} is already joined by user`})
            }
            else{
                classroom.students.push(req.params.userId)
                classroom.save()
                const user = await User.findOne({_id:req.params.userId})
                user.classrooms.push(classroom._id)
                user.save()
                const ua = await UserAttendence.create({studentId: req.params.userId,classroom:classroom._id})
                res.status(200).json({done: true,message:`classroom with Id ${classroom.classId} joined`})
            }
        }else{
            res.status(422).json({done: false,error:`classroom with Id ${req.query.slug} doesn't exists`})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports=router