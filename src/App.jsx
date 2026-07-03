import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Shop from '@/pages/Shop';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
