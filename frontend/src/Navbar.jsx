import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" className="nav-logo" />
          <span className="ms-2 fw-bold">EMS</span>
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">View Employees</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
