import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/:category" element={<ShopPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="*" element={
              <main className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1 className="font-serif text-2xl text-ink-900">Page Not Found</h1>
                  <p className="mt-2 text-sm text-ink-500">This page doesn't exist yet.</p>
                </div>
              </main>
            } />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
