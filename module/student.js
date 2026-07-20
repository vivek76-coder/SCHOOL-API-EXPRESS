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

const createStudent = (req, res, Collections)=>{
    res.status(200).json("success")
}


const fetchStudent = (req, res, Collections)=>{
    res.status(200).json("success")
}


const updateStudent = (req, res, Collections)=>{
    res.status(200).json("success")
}


const deleteStudent = (req, res, Collections)=>{
    res.status(200).json("success")
}


module.exports ={
    createStudent,
    fetchStudent,
    updateStudent,
    deleteStudent
}

