import { Link } from "react-router-dom"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import "./home.css"

function Home() {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <div className="home-container text-white">

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 1, direction: "none" },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2, width: 1 }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } }
          }
        }}
      />

      <div className="overlay text-center pt-5">
        <h1 className="animate-fade-in mb-3 display-4">Welcome to Employee Management System</h1>
        <p className="lead animate-fade-in-delay mb-5">Manage your employees easily with this MERN application.</p>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <Link to="/add" className="text-decoration-none">
              <div className="card shadow-lg text-center p-4 h-100 card-hover">
                <img src="/add_employee.png" alt="Add" className="mb-3 card-img-top-custom"/>
                <h2>Add Employee</h2>
                <p className="text-muted">Fill employee details and add to database.</p>
                <button className="btn btn-primary mt-2">Go</button>
              </div>
            </Link>
          </div>

          <div className="col-md-5 mb-4">
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
