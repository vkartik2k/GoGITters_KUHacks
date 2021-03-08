// AJAX with JQuery is used inorder to make the page dynamic
// Although using AJAX with JQuery is an older technology, this could have been done using React/Angular to make the code more maintainable
// But due to less complexity of the project and less time (as this project was made in a hackathon), we decided to go with JQuery and AJAX

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return response.json();
} 

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// A seperate Object is defined for current state of the web page 
let state = {
    selectedCourse : false,
    isClassLive : false,
    courseDetails : {}
}

// Templates is object storing HTML template which is rendered using DOM manipulation
let templates = {
    name : ["<br/><span style=\"font-size: 14px;\">", "</span>"],
    coursesNav : ['<div id="', '" class="classroomBlock" style="background-color: #6A1B4D;"><span style="font-weight: 600;">', '</span><br><span style="font-size: 14px;">', '</span><br><br><span style="font-size: 14px;"><span style="font-weight: 600;">Faculty Name:</span>', '</span></div>'],
    classContent : ['<div class="classBanner"><span style="font-weight: 600; font-size: 28px;">', '</span><br><span style="font-size: 20px;">', '</span></div>'],
    liveClass : ['<div class="liveClass"><div class="liveClassLeft">The session is <span class="liveLogo">LIVE<span class="dot"></span></span><br>Join with Google Meet: <span class="lightShade">', '</span></div><div class="liveClassRight"><div class="btn" onclick="location.href=\'', '\'">Join Meet</div></div></div>', '<div class="liveClass noLiveClass"><div class="liveClassLeft">The session is NOT LIVE<br>Join with Google Meet: <span class="lightShade">'],
    lowerClass : ['<div class="mainDivider"><div class="testWindow" id="testWindow">No pending assessment<br><br>Wait for the teacher to ask a question</div><div class="windowDivider"></div><div class="attendanceWindow"><div class="statsContainer"><div class="statsMain"><br><span style="font-size: 35px; color: #27A4FF; font-weight: 600;">', '</span><br>Attention<br><br></div><div class="windowDivider"></div><div class="statsMain"><br><span style="font-size: 35px; color: #27A4FF; font-weight: 600;">', '</span><br>Attendance<br><br></div></div></div>'],
    testWindow : ['<br><label><input type="radio" name="question" value="', '">', '</label>', '<br><br><br><div style="display: flex; justify-content: center;"><div style="padding-right: 50px;"><button class="btn" id="submitQues">Submit</button></div><div><button class="btn" id="reportProblem">Report Problem</button></div></div>']
}

const user = JSON.parse(localStorage.user)

function load() {
    let htmlContent = ''
    postData('../user/'+ user._id+'/classrooms', {})
    .then(data => {
        if(data.done) {
            data.classrooms.forEach(element => {
                setTimeout(()=> {
                    $('#' + element.className.split(" ").join('_')).click(() => {
                        postData('../user/'+ user._id+'/classroom/'+element._id, {})
                        .then(data => {
                            state.courseDetails = data.classroom
                            state.selectedCourse = true
                            courseContent = templates.classContent[0] + capitalizeFirstLetter(state.courseDetails.className) + templates.classContent[1] + state.courseDetails.classId + templates.classContent[2]
                            if(data.currentSession) {
                                courseContent += templates.liveClass[0] + state.courseDetails.link + templates.liveClass[1] + state.courseDetails.link + templates.liveClass[2]
                            }
                            else {
                                courseContent += templates.liveClass[3] + state.courseDetails.link + templates.liveClass[1] + state.courseDetails.link + templates.liveClass[2]
                            }
                            courseContent += templates.lowerClass[0] + '100' + '%' + templates.lowerClass[1] + '100' + "%" + templates.lowerClass[2]
                            $('.classContent').html(courseContent)
                            $('.emptyContent').hide()
                            $('.classContent').show()

                            if(data.classroom.tempQuestions.length > 0) {
                                let question = data.classroom.tempQuestions[Math.floor(Math.random() * data.classroom.tempQuestions.length)];
                                let quesHtml = '<strong>Question. </strong>' + question.statement + '<br>'
                                question.options.forEach(option => {
                                    quesHtml += templates.testWindow[0] + option + templates.testWindow[1] + option + templates.testWindow[2]
                                });
                                quesHtml += templates.testWindow[3]
                                setTimeout(() => {
                                    $('#testWindow').html(quesHtml)
                                    $('#testWindow').addClass('testWindow2')
                                    $('#reportProblem').click(() => alert("Your problem with generated question has been reported!"))
                                    $('#submitQues').click(function() {
                                        let radioValue = $("input[name='question']:checked").val();
                                        let correct = false
                                        if(radioValue === question.correctAns) correct=true
                                        postData('../user/'+ user._id+'/round/'+question.round, {correct})
                                        .then(data => {
                                            if(data.done) {
                                                $('#testWindow').html("Your response is recorded.")
                                                $('#testWindow').removeClass('testWindow2')
                                            }
                                        })
                                    })
                                }, 200)
                            }
                        })
                    })
                }, 200)    
                htmlContent += templates.coursesNav[0]+ element.className.split(" ").join('_') + templates.coursesNav[1] + capitalizeFirstLetter(element.className) + templates.coursesNav[2] + element.classId + templates.coursesNav[3] + " "+ capitalizeFirstLetter(element.teacher.firstName) + " " + capitalizeFirstLetter(element.teacher.lastName) +templates.coursesNav[4]
            });
            $('#classCardContainer').html(htmlContent)
        }        
    })
}

$(document).ready(function () {
    if(!localStorage.token) window.location.href = '/login'
    else {
        $("#nameContainer").html(user.firstName + " " + user.lastName + templates.name[0] + user.email + templates.name[1])
        $("#logOutBtn").click(() => {
            localStorage.clear()
            window.location.href = '/login'
        })
        $(document).click(function (e) {
            if ($('#joinRoomOverlay').is(e.target) && !$('#joinRoomContainer').is(e.target)) {
                $('#joinRoomOverlay').hide()
            }
        })
        $("#addClassroom").click(function() {
            $('#joinRoomOverlay').show()
        })
        $("#joinRoomBtn").click(function() {
            let classroomCode = $("#joinRoomId").val()
            postData('../user/'+ user._id+'/joinclassroom?slug='+classroomCode, {})
            .then(data => {
                if(data.done) {
                    $('#joinRoomOverlay').hide()
                    alert('Classroom Joined')
                }
                else alert('Invalid Classroom Code')
            })
        })
        load()
        setTimeout(() => $("#loading").hide(), 1000)
    }
})