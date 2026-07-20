import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import './App.css';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const ProductPage = lazy(() => import('@/pages/ProductPage'));
const CollectionsPage = lazy(() => import('@/pages/CollectionsPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="w-8 h-8 border border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-stone-400">Loading</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route
                  path="*"
                  element={
                    <main className="pt-32 pb-16 text-center min-h-[60vh]">
                      <h1 className="font-serif text-3xl text-stone-950 mb-4">Page Not Found</h1>
                      <p className="font-sans text-sm text-stone-500 mb-8">The page you are looking for does not exist.</p>
                      <a href="/" className="btn-outline">Return Home</a>
                    </main>
                  }
                />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
