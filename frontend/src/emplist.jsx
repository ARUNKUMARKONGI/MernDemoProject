import { useEffect,useState } from "react"

function Emplist() {

  const [list,setlist] = useState([])
  const [name,setname] = useState("")
  const [dept,setdept] = useState("")
  const [minsal,setminsal] = useState("")
  const [maxsal,setmaxsal] = useState("")
  const [sortby,setsortby] = useState("")

  const load = () => {
    const url = `https://merndemoprojectarun.onrender.com/getemp?name=${name}&dept=${dept}&minsal=${minsal}&maxsal=${maxsal}&sortby=${sortby}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setlist(data))
  }

  const delemp = (id) => {
    fetch(`https://merndemoprojectarun.onrender.com/delemp/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(msg=>{
      alert(msg)
      load()
    })
  }

  useEffect(()=>{ load() },[sortby])

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-4">Employee Search</h2>

        <div className="row mb-3">
          <div className="col">
            <input className="form-control" placeholder="Search Name" onChange={e=>setname(e.target.value)} />
          </div>
          <div className="col">
            <select className="form-select" onChange={e=>setdept(e.target.value)}>
              <option value="">All Departments</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="col">
            <input className="form-control" placeholder="Min Salary" onChange={e=>setminsal(e.target.value)} />
          </div>
          <div className="col">
            <input className="form-control" placeholder="Max Salary" onChange={e=>setmaxsal(e.target.value)} />
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" onClick={load}>Search</button>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-3">
            <select className="form-select" onChange={e=>setsortby(e.target.value)}>
              <option value="">Sort By</option>
              <option value="id">Employee ID</option>
              <option value="name">Employee Name</option>
            </select>
          </div>
        </div>

        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map(e=>(
              <tr key={e.emp_id}>
                <td>{e.emp_id}</td>
                <td>{e.emp_name}</td>
                <td>{e.dept}</td>
                <td>{e.salary}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={()=>delemp(e.emp_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Emplist
