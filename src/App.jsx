import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/nav/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-velmora-cream">
      <Nav />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-4">Velmora</p>
        <h1 className="font-cormorant text-5xl text-velmora-ink font-light mb-6">{title}</h1>
        <p className="font-inter text-sm text-velmora-stone mb-8">This page is coming soon.</p>
        <a href="/" className="font-inter text-xs uppercase tracking-widest-sm text-velmora-gold border border-velmora-gold px-8 py-3 hover:bg-velmora-gold hover:text-velmora-ink transition-all duration-300">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App
