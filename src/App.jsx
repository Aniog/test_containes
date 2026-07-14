import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastProvider } from "@/components/ui/toast"
import Home from "@/pages/Home"
import Contacts from "@/pages/Contacts"
import "./App.css"

function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ToastProvider>
    </Router>
  )
}

export default App
