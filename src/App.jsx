import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Homepage from './components/home/Homepage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import JournalPage from './pages/JournalPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-velmora-cream">
          <Navigation />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
