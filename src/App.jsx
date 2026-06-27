import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/ui/Navbar';
import CartDrawer from '@/components/ui/CartDrawer';
import Footer from '@/components/ui/Footer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route
                path="*"
                element={
                  <main className="pt-24 min-h-screen bg-cream flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="font-serif text-4xl text-dark-900 mb-4">Page Not Found</h1>
                      <p className="text-muted font-sans mb-6">The page you are looking for does not exist.</p>
                      <a
                        href="/"
                        className="inline-block px-8 py-3 bg-dark-900 text-cream text-xs tracking-[0.2em] uppercase font-sans hover:bg-dark-700 transition-colors"
                      >
                        Return Home
                      </a>
                    </div>
                  </main>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
