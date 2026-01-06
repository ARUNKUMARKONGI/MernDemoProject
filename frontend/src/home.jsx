import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <div className="home-wrapper">
      <div className="particles-bg"></div>

      <div className="container home-content">
        <div className="text-center mb-5 text-white">
          <h1 className="fw-bold display-5">
            Employee Management System
          </h1>
          <p className="lead">
            Manage employees efficiently using MERN stack
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <Link to="/add" className="text-decoration-none">
              <div className="card shadow-lg p-5 text-center h-100 home-card">
                <h3>Add Employee</h3>
                <p className="text-muted">
                  Add employee details to database
                </p>
                <button className="btn btn-primary mt-3">
                  Go
                </button>
              </div>
            </Link>
          </div>

          <div className="col-md-5 mb-4">
            <Link to="/list" className="text-decoration-none">
              <div className="card shadow-lg p-5 text-center h-100 home-card">
                <h3>View Employees</h3>
                <p className="text-muted">
                  Search, sort and manage employees
                </p>
                <button className="btn btn-success mt-3">
                  Go
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
