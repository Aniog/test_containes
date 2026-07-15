import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<div className="pt-24 pb-16"><div className="container text-center"><h1 className="font-serif text-4xl text-[#F5F5F0]">About Velmora</h1><p className="mt-4 text-[#A8A8A0]">Coming soon...</p></div></div>} />
            <Route path="/journal" element={<div className="pt-24 pb-16"><div className="container text-center"><h1 className="font-serif text-4xl text-[#F5F5F0]">Journal</h1><p className="mt-4 text-[#A8A8A0]">Coming soon...</p></div></div>} />
            <Route path="*" element={<div className="pt-24 pb-16"><div className="container text-center"><h1 className="font-serif text-4xl text-[#F5F5F0]">404</h1><p className="mt-4 text-[#A8A8A0]">Page not found</p></div></div>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
