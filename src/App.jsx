import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/components/cart/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
