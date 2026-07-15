import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/shipping" element={<Home />} />
              <Route path="/care" element={<Home />} />
              <Route path="/faqs" element={<Home />} />
              <Route path="/sustainability" element={<Home />} />
              <Route path="/careers" element={<Home />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
