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
app.put('/student/:id', updateStudent)
app.delete('/student/:id', deleteStudent)

// -------------TEARCHER_METHODS---------
app.get('/teacher', fetchTeacher)
app.post('/teacher', createTeacher)
app.put('/teacher/:id',updateTeacher)
app.delete('/teacher/:id',deleteTeacher)



