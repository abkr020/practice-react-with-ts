import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home"
import SvgString from "./components/svgString/SvgString"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/svg-string" element={<SvgString />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App