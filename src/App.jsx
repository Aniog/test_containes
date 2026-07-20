import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartProvider';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
