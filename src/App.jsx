import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "@/components/landing/Navbar"
import Home from "@/pages/Home"
import Contacts from "@/pages/Contacts"

const AppContent = () => {
  const location = useLocation()
  const isContacts = location.pathname === "/contacts"

  const scrollToContact = () => {
    const el = document.getElementById("contact")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {!isContacts && <Navbar onContactClick={scrollToContact} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
