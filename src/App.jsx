import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductDetail from './components/product/ProductDetail'
import ShopPage from './pages/ShopPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/collections" element={<Layout><div className="min-h-screen pt-32 flex items-center justify-center"><p className="font-serif text-2xl">Collections Page Coming Soon</p></div></Layout>} />
        <Route path="/about" element={<Layout><div className="min-h-screen pt-32 flex items-center justify-center"><p className="font-serif text-2xl">About Page Coming Soon</p></div></Layout>} />
        <Route path="/journal" element={<Layout><div className="min-h-screen pt-32 flex items-center justify-center"><p className="font-serif text-2xl">Journal Page Coming Soon</p></div></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
