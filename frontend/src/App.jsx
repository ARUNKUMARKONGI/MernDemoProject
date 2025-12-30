import { Routes,Route,Link } from "react-router-dom"
import Home from "./home"
import Addemp from "./addemp"
import Emplist from "./emplist"

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand" to="/add">Add Employee</Link>
          <Link className="navbar-brand" to="/list">View Employees</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Addemp/>} />
        <Route path="/list" element={<Emplist/>} />
      </Routes>
    </>
  )
}

export default App
