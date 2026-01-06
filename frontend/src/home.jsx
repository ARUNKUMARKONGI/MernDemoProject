import { Link } from "react-router-dom"
import "./home.css"

function Home() {
  return (
    <div className="home-container text-white">
      <div className="overlay text-center pt-5">
        <h1 className="animate-fade-in mb-3">Welcome to Employee Management System</h1>
        <p className="lead animate-fade-in-delay">Manage your employees easily with this MERN application.</p>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <Link to="/add" className="text-decoration-none">
              <div className="card shadow-lg text-center p-4 h-100 card-hover">
                <img src="/add_employee.png" alt="Add" className="mb-3 card-img-top-custom"/>
                <h2>Add Employee</h2>
                <p className="text-muted">Fill employee details and add to database.</p>
                <button className="btn btn-primary mt-2">Go</button>
              </div>
            </Link>
          </div>

          <div className="col-md-6 mb-4">
            <Link to="/list" className="text-decoration-none">
              <div className="card shadow-lg text-center p-4 h-100 card-hover">
                <img src="/view_employees.png" alt="View" className="mb-3 card-img-top-custom"/>
                <h2>View Employees</h2>
                <p className="text-muted">See all employees and search/filter data.</p>
                <button className="btn btn-primary mt-2">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
