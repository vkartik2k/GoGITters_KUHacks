# API INFO

## ADMIN

### /teacherApproval/:id -----> FOR TEACHER APPROVAL FROM ADMIN

### /studentApproval/:id -----> FOR STUDENT APPROVAL FROM ADMIN OR TEACHER

### /teacherRejection/:id -----> FOR TEACHER REJECTION OR REMOVAL FROM ADMIN

### /studentRejection/:id -----> FOR STUDENT REJECTION OR REMOVAL FROM ADMIN OR TEACHER

### /waitingList-teacher -----> FOR SHOWING LIST OF ALL UNAPPROVED TEACHERS

### /waitingList-student -----> FOR SHOWING LIST OF ALL UNAPPROVED STUDENTS FROM ADMIN OR TEACHER

### /create-cafe -----> FOR CREATING CAFE FROM ADMIN

### /getAll-cafe -----> FOR LIST OF ALL CAFES

### /cafeInfo/:cafeId -----> FOR SHOWING OVERALL INFO OF CAFE , STUDENTS , TEACHER

### /detailedInfo/:userId -----> FOR SHOWING ALL DETAILS OF PARTICULAR USER FOR ADMIN AND TEACHER

### /courseAccess/:userId/course/:courseId -----> FOR GIVING ACCESS TO TEACHER OF PARTICULAR COURSE FOR ADMIN

### /removeAccess/:userId/course/:courseId -----> FOR REMOVING ACCESS TO TEACHER OF PARTICULAR COURSE FOR ADMIN

### /create-question -----> FOR CREATING QUESTION FOR ADMIN

### /create-topic -----> FOR CREATING TOPIC FOR ADMIN

### /create-lecture -----> FOR CREATING LECTURE FOR ADMIN

### /create-test -----> FOR CREATING TEST FOR ADMIN

### /create-assignment -----> FOR CREATING ASSIGNMENT FOR ADMIN

### /create-course -----> FOR CREATING COURSE FOR ADMIN

### /courses -----> FOR SHOWING ALL COURSES FOR ADMIN

### /courseFees/:courseId/cafe/:cafeId -----> FOR UPDATING OR CREATING A COURSE FEES IN A CAFE FOR ADMIN

### /updateUser/:userId -----> FOR UPDATING OR CREATING A USER FOR ADMIN

### /receipts/:userId -----> FOR SHOWING ALL RECEIPTS OF A USER FOR ADMIN , STUDENT AND TEACHER

### /generateReceipt/:userId -----> FOR GENERATING RECEIPT FOR A USER FOR ADMIN

### /cafeStudents/:cafeId -----> FOR STUDENT'S LIST ALONG WITH COURSES ENROLLED FOR TEACHER

### /studentCompletionRate/:userId/cafe/:cafeId -----> FOR STUDENTS COMPLETION RATE AND MARKS

### /requestTestEvaluate/:testId -----> FOR CHECKING AND SCORING STUDENT FOR TEACHER

### /enterMarks/:courseEnrolled/test/:testId -----> FOR UPDATING SCORE IN DATABASE FOR TEACHER

### /loadPendingEvaluations/:cafeId/course/:courseId -----> LOAD ALL PENDING TEST EVALUATIONS FOR TEACHER