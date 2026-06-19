import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CartDrawer />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route
              path="/collections"
              element={
                <PlaceholderPage
                  title="Collections"
                  subtitle="Curated collections for every occasion. Coming soon."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PlaceholderPage
                  title="Our Story"
                  subtitle="Every woman deserves jewelry that feels luxurious without the luxury markup."
                />
              }
            />
            <Route
              path="/journal"
              element={
                <PlaceholderPage
                  title="Journal"
                  subtitle="Style guides, care tips, and stories from the Velmora world."
                />
              }
            />
            <Route
              path="*"
              element={
                <PlaceholderPage
                  title="Page Not Found"
                  subtitle="The page you are looking for does not exist."
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
