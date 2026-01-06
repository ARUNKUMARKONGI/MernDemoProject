import { Link } from "react-router-dom"
import "./home.css"

function Home() {
  return (
    <div className="home-wrapper">
      <div className="animated-bg"></div>

      <div className="container home-content">
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold">
            Employee Management System
          </h1>
          <p className="lead">
            Professional MERN dashboard to manage employees
          </p>
        </div>

        <div className="row mb-5">
          <div className="col-md-4">
            <div className="stats-card">
              <h2>Employees</h2>
              <p>Total records</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-card">
              <h2>Departments</h2>
              <p>Active teams</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-card">
              <h2>Salary</h2>
              <p>Insights</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <Link to="/add" className="text-decoration-none">
              <div className="card home-card text-center p-5 h-100">
                <img src="/add_employee.png" className="home-icon" />
                <h3 className="mt-3">Add Employee</h3>
                <p className="text-muted">
                  Insert employee details securely
                </p>
                <button className="btn btn-primary mt-3">Go</button>
              </div>
            </Link>
          </div>

          <div className="col-md-5 mb-4">
            <Link to="/list" className="text-decoration-none">
              <div className="card home-card text-center p-5 h-100">
                <img src="/view_employees.png" className="home-icon" />
                <h3 className="mt-3">View Employees</h3>
                <p className="text-muted">
                  Search, sort and delete records
                </p>
                <button className="btn btn-success mt-3">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
