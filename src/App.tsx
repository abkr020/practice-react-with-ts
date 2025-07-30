import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home"
import InputGlich from "./pages/inputGlich/InputGlich"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input-glich" element={<InputGlich />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App