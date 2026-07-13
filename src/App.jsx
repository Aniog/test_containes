import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="shipping" element={<PlaceholderPage title="Shipping & Delivery" />} />
            <Route path="returns" element={<PlaceholderPage title="Returns & Exchanges" />} />
            <Route path="care" element={<PlaceholderPage title="Jewelry Care" />} />
            <Route path="faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="size-guide" element={<PlaceholderPage title="Size Guide" />} />
            <Route path="sustainability" element={<PlaceholderPage title="Sustainability" />} />
            <Route path="stores" element={<PlaceholderPage title="Stores" />} />
            <Route path="careers" element={<PlaceholderPage title="Careers" />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
