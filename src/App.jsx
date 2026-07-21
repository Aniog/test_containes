import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/components/ui/Toast';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import ShopPage from '@/pages/ShopPage';

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  );
}
