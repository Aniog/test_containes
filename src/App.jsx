import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-velmora-ivory text-velmora-black">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<ShopPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
