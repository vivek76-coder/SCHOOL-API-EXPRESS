const { MongoClient, ObjectId } = require("mongodb");
let db = null;
MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    db = client.db("wapschool");
  })

  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

const createStudent = async (req, res) => {
  const StudentCollection = db.collection("students");
  const data = req.body;
  await StudentCollection.insertOne(data);
  res.status(200).json(data);
};

const fetchStudent = async (req, res) => {
  const StudentCollection = db.collection("students");
  const studentData = await StudentCollection.find().toArray();
  res.status(200).json(studentData);
};

const updateStudent = async (req, res) => {
  try {
    const StudentCollection = db.collection("students");
    const { id } = req.params;
    const studentData = req.body
    await StudentCollection.updateOne({_id: new ObjectId(id)},{$set : studentData})
    res.status(200).json(studentData)
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteStudent = async (req, res) => {
    const StudentCollection = db.collection("students");
    const { id } = req.params
    await StudentCollection.deleteOne({_id: new ObjectId(id)})
    res.status(200).json("deleted");
};

module.exports = {
  createStudent,
  fetchStudent,
  updateStudent,
  deleteStudent
};
