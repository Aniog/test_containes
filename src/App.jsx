import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Bikes from './pages/Bikes'
import Services from './pages/Services'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="services" element={<Services />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
