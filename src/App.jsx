import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactsPage from './pages/ContactsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  )
}

export default App
