import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1A1410',
            color: '#F7F3EE',
            border: '1px solid #EDE8E0',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout />
      </CartProvider>
    </Router>
  );
}

export default App;
