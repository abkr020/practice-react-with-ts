import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home"
import EmpDatabaseManagement from "./pages/emp/EmpDatabaseManagement"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emp-database-management" element={<EmpDatabaseManagement />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App