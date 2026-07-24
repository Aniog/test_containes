import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/about" element={<HomePage />} />
              <Route path="/journal" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
          <Toast />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
