const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

const emp_schema = new mongoose.Schema({
    emp_id:String,
    emp_name:String,
    dept:String,
    salary:Number
})

const emp_model = mongoose.model("emp",emp_schema)

app.post("/addemp",(req,res)=>{
    const emp = new emp_model({
        emp_id:req.body.emp_id,
        emp_name:req.body.emp_name,
        dept:req.body.dept,
        salary:req.body.salary
    })
    emp.save()
    res.send("employee added")
})

app.get("/getemp",(req,res)=>{
    const query = {}

    if(req.query.name){
        query.emp_name = { $regex:req.query.name, $options:"i" }
    }

    if(req.query.dept){
        query.dept = req.query.dept
    }

    if(req.query.minsal || req.query.maxsal){
        query.salary = {}
        if(req.query.minsal) query.salary.$gte = Number(req.query.minsal)
        if(req.query.maxsal) query.salary.$lte = Number(req.query.maxsal)
    }

    emp_model.find(query).then(data=>res.json(data))
})

app.listen(5000)
