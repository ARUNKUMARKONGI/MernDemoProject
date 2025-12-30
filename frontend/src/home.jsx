import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1>Welcome to Employee Management System</h1>
        <p className="lead">Manage your employees easily with this MERN application.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <Link to="/add" className="text-decoration-none">
            <div className="card shadow-sm text-center p-5 h-100">
              <h2>Add Employee</h2>
              <p className="text-muted">Fill employee details and add to database.</p>
              <button className="btn btn-primary">Go</button>
            </div>
          </Link>
        </div>

        <div className="col-md-6 mb-3">
          <Link to="/list" className="text-decoration-none">
            <div className="card shadow-sm text-center p-5 h-100">
              <h2>View Employees</h2>
              <p className="text-muted">See all employees and search/filter data.</p>
              <button className="btn btn-primary">Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
