import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

// Placeholder for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-section mb-4">{title}</h1>
        <p className="text-velmora-warm-gray">Coming soon</p>
      </div>
    </div>
  );
}

export default App;
