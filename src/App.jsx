import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
