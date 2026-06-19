import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import './App.css';

export default function App() {
  if (!window.__STRIKINGLY_PREVIEW_NAVIGATE__) {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      // handled by the bridge
    };
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/:category" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
