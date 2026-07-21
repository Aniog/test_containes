import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import '@/App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Catch all to Home for now */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
