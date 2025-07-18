import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home"
import FileExplorerPage from "./pages/fileExplorer/FileExplorer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/file-explorer" element={<FileExplorerPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App