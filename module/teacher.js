const {MongoClient} = require("mongodb")
let db = null
MongoClient.connect("mongodb://localhost:27017")
.then((client)=>{
    const db = client.db("wapschool")
})

.catch((err)=>{
    console.log(err.message)
    process.exit(1)
})


const createTeacher = (req, res, Collections)=>{
    res.status(200).json("success")
}


const fetchTeacher = (req, res, Collections)=>{
    res.status(200).json("success")
}


const updateTeacher = (req, res, Collections)=>{
    res.status(200).json("success")
}


const deleteTeacher = (req, res, Collections)=>{
    res.status(200).json("success")
}

module.exports = {
    createTeacher,
    fetchTeacher,
    updateTeacher,
    deleteTeacher
}