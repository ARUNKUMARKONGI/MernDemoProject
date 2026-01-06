const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

const emp_schema = new mongoose.Schema({
    emp_id:{ type:String, required:true, unique:true },
    emp_name:String,
    dept:String,
    salary:Number
})

const emp_model = mongoose.model("employees",emp_schema)

app.post("/addemp",async(req,res)=>{
    try{
        const emp = new emp_model(req.body)
        await emp.save()
        res.json("employee added")
    }catch(err){
        if(err.code === 11000){
            res.status(400).json("employee with id already exists")
        }else{
            res.status(500).json("server error")
        }
    }
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

app.listen(process.env.PORT || 5000)
