import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import Home from "@/pages/Home"
import Contacts from "@/pages/Contacts"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
