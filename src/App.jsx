import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="*"
              element={
                <div className="pt-18 min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="font-serif text-3xl text-foreground">Page Not Found</h1>
                    <p className="text-stone mt-2">This page doesn't exist yet.</p>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
