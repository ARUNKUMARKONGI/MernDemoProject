import { useState } from "react"

function Addemp() {

  const [emp_id,setempid] = useState("")
  const [emp_name,setempname] = useState("")
  const [dept,setdept] = useState("")
  const [salary,setsalary] = useState("")

  const addemp = () => {
    fetch("http://localhost:5000/addemp",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({
        emp_id:emp_id,
        emp_name:emp_name,
        dept:dept,
        salary:Number(salary)
      })
    }).then(res=>res.text())
      .then(msg=>alert(msg))
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-4">Add Employee</h2>

        <input className="form-control mb-3" placeholder="Employee ID" onChange={e=>setempid(e.target.value)} />
        <input className="form-control mb-3" placeholder="Employee Name" onChange={e=>setempname(e.target.value)} />
        <select className="form-select mb-3" onChange={e=>setdept(e.target.value)}>
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
        <input className="form-control mb-3" placeholder="Salary" onChange={e=>setsalary(e.target.value)} />

        <button className="btn btn-primary" onClick={addemp}>Add Employee</button>
      </div>
    </div>
  )
}

export default Addemp
