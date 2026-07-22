import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Navbar from '@/components/Navbar.jsx';
import CartDrawer from '@/components/CartDrawer.jsx';
import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import ProductDetail from '@/pages/ProductDetail.jsx';
import About from '@/pages/About.jsx';
import Journal from '@/pages/Journal.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
