import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Nav from './components/Nav';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <CartDrawer />
          <Toaster position="bottom-center" className="sonner-toast" />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
