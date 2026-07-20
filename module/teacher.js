const {MongoClient, ObjectId} = require("mongodb")
let db = null
MongoClient.connect("mongodb://localhost:27017")
.then((client)=>{
     db = client.db("wapschool")
})

.catch((err)=>{
    console.log(err.message)
    process.exit(1)
})


const createTeacher = async (req, res, Collections)=>{
    const TeacherCollection = db.collection("teachers")
    const payload = req.body
    await TeacherCollection.insertOne(payload)
    res.status(200).json(payload)
}


const fetchTeacher = async (req, res, Collections)=>{
    const TeacherCollection = db.collection("teachers")
    const teacherData = await TeacherCollection.find().toArray()
    res.status(200).json(teacherData)
}


const updateTeacher = (req, res, Collections)=>{
    const TeacherCollection = db.collection("teachers")
    const {id} = req.params
    const payload = req.body
    TeacherCollection.updateOne({_id : new ObjectId(id)},{$set : payload})
    res.status(200).json("success")
}


const deleteTeacher = async (req, res, Collections)=>{
    const TeacherCollection = db.collection("teachers")
    const {id} = req.params
    await TeacherCollection.deleteOne({_id : new ObjectId(id)})
    res.status(200).json("success")
}

module.exports = {
    createTeacher,
    fetchTeacher,
    updateTeacher,
    deleteTeacher
}