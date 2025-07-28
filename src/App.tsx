import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home"
import SvgString from "./components/svgString/SvgString"

import FileExplorerPage from "./pages/fileExplorer/FileExplorer"

import EmpDatabaseManagement from "./pages/emp/EmpDatabaseManagement"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />



          <Route path="/emp-database-management" element={<EmpDatabaseManagement />} />
          
          <Route path="/file-explorer" element={<FileExplorerPage />} />

          <Route path="/svg-string" element={<SvgString />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App