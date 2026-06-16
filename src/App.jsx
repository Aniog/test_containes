import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-4xl font-bold">About Us Section - Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  )
}
