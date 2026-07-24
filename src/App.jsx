import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center pt-20"><p className="text-charcoal text-lg">About Page - Coming Soon</p></div>} />
              <Route path="/journal" element={<div className="min-h-screen flex items-center justify-center pt-20"><p className="text-charcoal text-lg">Journal Page - Coming Soon</p></div>} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
