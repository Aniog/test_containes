import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import ContactsPage from '@/pages/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
