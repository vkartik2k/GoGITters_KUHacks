async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let state = {
    selectedCourse: false,
    isClassLive: false,
    courseDetails: {},
    uploadFile: '',
    sessionId: '',
    round: ''
}

let templates = {
    name: ["<br/><span style=\"font-size: 14px;\">", "</span>"],
    coursesNav: ['<div id="', '" class="classroomBlock" style="background-color: #F27C59;"><span style="font-weight: 600;">', '</span><br><span style="font-size: 14px;">', '</span><br><br><span style="font-size: 14px;"><span style="font-weight: 600;">Faculty Name:</span>', '</span></div>'],
    classContent: ['<div class="classBanner"><span style="font-weight: 600; font-size: 28px;">', '</span><br><span style="font-size: 20px;">', '</span></div>'],
    classContent2: [' <div class="startLiveClass"><div class="liveClassLeft">Upload ppt and click start to start the session<br>Google Meet Link: <span class="lightShade">', `</span>
    </div>
    <div class="liveClassRight">
        <input class="pgInput" placeholder="Cutoff" id="cutoff">
    </div>
    <div style="width: 8px;"></div>
    <div class="liveClassRight">
        <input class="pgInput" placeholder="Session Name" style="width: 120px; text-align: left;" id="sessionName">
    </div>
    <div style="width: 8px;"></div>
    <div class="liveClassRight">
        <div class="btn" style="background-color: #fbbc04; border: none; color: black;" id="uploadPpt">Upload PPT</div>
        <input type="file" id="file" style="display:none;" />
    </div>
    <div style="width: 8px;"></div>
    <div class="liveClassRight">
        <div class="btn" id="startSession">Start Session</div>
    </div>
    </div>`],
    classContent3: `<div class="startLiveClass noLiveClass" id="roundContainer">
    <div class="liveClassLeft">
        Start Round to generate pop up questions on student's portal
    </div>
    <div class="liveClassRight">
        <input class="pgInput" placeholder="P.No." id="pageNo">
    </div>
    <div style="width: 20px;"></div>
    <div class="liveClassRight">
        <div class="btn" id="startRound">Start Round</div>
    </div>
    </div>`,


    sessionDetails: [`<div class="startLiveClass noLiveClass1">
    <div style="display: flex; align-items: center;">
        <div class="liveClassLeft">
            <strong>`, `</strong>
            </div>
            <div class="liveClassRight">`, `</div>
            <div style="width: 20px;"></div>
            <div class="liveClassRight">
                <div class="btn" >View Details</div>
            </div>
        </div>
        <div style="height: 10px;"></div>
        <div style="display: flex; justify-content: space-between;">
            <div>
                Attendance :`, `</div>
                <div>
                    Attentiveness :`, `</div>
                    <div>
                        Understanding : `, `</div>
                        </div>
                    </div>`]

}

const user = JSON.parse(localStorage.user)

function loadCourses() {
    let htmlContent = ''
    postData('../../user/' + user._id + '/classrooms', {})
        .then(data => {
            if (data.done) {
                data.classrooms.forEach(element => {
                    setTimeout(() => {
                        $('#' + element.className.split(" ").join('_')).click(() => {
                            postData('../../teacher/' + user._id + '/classroom/' + element._id, {})
                                .then(data => {
                                    $('.emptyContent').hide()
                                    $('.container2').show()
                                    let newContent2 = ''
                                    data.classroom.sessions.reverse()
                                    data.classroom.sessions.forEach(session => {
                                        var d = (new Date(session.createdAt)).toString().split(" ");
                                        var date1 = d[1] + " " + d[2] + " " + d[3]
                                        newContent2 += templates.sessionDetails[0] + session.sessionName + templates.sessionDetails[1] + date1 + templates.sessionDetails[2] + '25%' + templates.sessionDetails[3] + '25%' + templates.sessionDetails[4] + '25%' + templates.sessionDetails[5]
                                    })
                                    $('.classContent2').html(newContent2)
                                    let courseDetail = templates.classContent[0] + data.classroom.className + templates.classContent[1] + data.classroom.classId + templates.classContent[2]
                                    courseDetail += templates.classContent2[0] + data.classroom.link + templates.classContent2[1]
                                    $(".classContent").html(courseDetail)
                                    setTimeout(function () {
                                        $("#uploadPpt").click(function () {
                                            $("#file").click()
                                        })
                                        $("#startSession").click(function () {
                                            if (state.sessionId === '') {
                                                const files = document.querySelector("[type=file]").files;
                                                const formData = new FormData();

                                                for (let i = 0; i < files.length; i++) {
                                                    let file = files[i];
                                                    formData.append("file", file);
                                                    formData.append("upload_preset", "docs_upload_example_us_preset");

                                                    fetch("https://api.cloudinary.com/v1_1/demo/image/upload", {
                                                        method: "POST",
                                                        body: formData
                                                    })
                                                        .then((response) => {
                                                            return response.text();
                                                        })
                                                        .then((data) => {
                                                            // state.uploadFile=  JSON.parse(data).url.split("upload").join("upload/fl_attachment:temp")
                                                            state.uploadFile = JSON.parse(data).url

                                                            let inputJson = {}
                                                            inputJson.sessionName = $('#sessionName').val()
                                                            inputJson.cutoff = $('#cutoff').val()
                                                            inputJson.classNote = state.uploadFile
                                                            postData('../../user/' + user._id + '/classroom/' + element._id + '/createSession', inputJson)
                                                                .then(data => {
                                                                    $('#sessionName').hide()
                                                                    $('#cutoff').hide()
                                                                    $("#uploadPpt").hide()
                                                                    $("#startSession").html('Stop Session')
                                                                    state.sessionId = data.session._id
                                                                    $('.classContent').append(templates.classContent3)
                                                                    setTimeout(function () {
                                                                        $('#startRound').click(function () {
                                                                            if (state.round === '') {
                                                                                let pg = $('#pageNo').val()
                                                                                postData('../../user/' + user._id + '/classroom/' + element._id + '/session/' + state.sessionId + '/createRound', {
                                                                                    pageNumber: pg
                                                                                })
                                                                                    .then(data => {
                                                                                        $('#startRound').html('Stop Round')
                                                                                        $("#pageNo").hide()
                                                                                        state.round = data.round._id
                                                                                    })
                                                                            }
                                                                            else {
                                                                                postData('../../user/' + user._id + '/classroom/' + element._id + '/session/' + state.sessionId + '/endRound/' + state.round, {})
                                                                                    .then(data => {
                                                                                        $('#startRound').html('Start Round')
                                                                                        $("#pageNo").show()
                                                                                        state.round = ''
                                                                                    })
                                                                            }
                                                                        })
                                                                    }, 200)
                                                                })
                                                        });
                                                }
                                            }
                                            else {
                                                postData('../../user/' + user._id + '/classroom/' + element._id + '/endSession/' + state.sessionId, {})
                                                    .then(data => {
                                                        $('#sessionName').show()
                                                        $('#cutoff').show()
                                                        $("#uploadPpt").show()
                                                        $("#startSession").html('Start Session')
                                                        $('#roundContainer').hide()
                                                        state.sessionId = ''
                                                    })
                                            }
                                        })
                                    }, 200)
                                })
                        })
                    }, 200)

                    htmlContent += templates.coursesNav[0] + element.className.split(" ").join('_') + templates.coursesNav[1] + capitalizeFirstLetter(element.className) + templates.coursesNav[2] + element.classId + templates.coursesNav[3] + " " + capitalizeFirstLetter(element.teacher.firstName) + " " + capitalizeFirstLetter(element.teacher.lastName) + templates.coursesNav[4]
                });
                $('#classCardContainer').html(htmlContent)
            }
        })
}

function loadPage() {
    loadCourses()
    setTimeout(() => $("#loading").hide(), 1000)
}

$(document).ready(function () {
    if (!localStorage.token) window.location.href = '/login'
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
        $("#addClassroom").click(function () {
            $('#joinRoomOverlay').show()
        })
        $("#joinRoomBtn").click(function () {
            let classroomName = $("#classroomName").val()
            let classroomLink = $("#meetLink").val()
            postData('../../user/' + user._id + '/createClassroom', {
                link: classroomLink,
                className: classroomName
            })
                .then(data => {
                    if (data.done) {
                        $('#joinRoomOverlay').hide()
                        alert('Classroom Created')
                        location.reload();
                    }
                    else {
                        alert('Error in creating classroom')
                    }
                })
        })
        loadPage()
    }
})