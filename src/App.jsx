import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

