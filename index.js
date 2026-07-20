const express = require("express");
const {createStudent, fetchStudent, updateStudent, deleteStudent} = require("./module/student")
const {createTeacher, fetchTeacher, updateTeacher, deleteTeacher} = require("./module/teacher")
const app = express()
app.listen(8080, ()=>{console.log("establishted")})

app.use(express.json())
app.use(express.urlencoded({extended : false}))

// ----------STUDENTS_METHODS-----------
app.get('/student', fetchStudent)
app.post('/student', createStudent)
app.put('/student', updateStudent)
app.delete('/student', deleteStudent)

// -------------TEARCHER_METHODS---------
app.get('/teacher', fetchStudent)
app.post('/teacher', createTeacher)
app.put('/teacher',updateTeacher)
app.delete('/teacher',deleteTeacher)



