import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Fallback routes */}
          <Route path="/about" element={<div className="h-screen flex items-center justify-center font-heading text-4xl">About Us Coming Soon</div>} />
          <Route path="/journal" element={<div className="h-screen flex items-center justify-center font-heading text-4xl">Journal Coming Soon</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
