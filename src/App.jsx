import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/Home';
import ShopPage from '@/pages/Shop';
import ProductPage from '@/pages/Product';
import AboutPage from '@/pages/About';
import './App.css';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<AboutPage />} />
            <Route path="/shipping" element={<AboutPage />} />
            <Route path="/returns" element={<AboutPage />} />
            <Route path="/size-guide" element={<AboutPage />} />
            <Route path="/care" element={<AboutPage />} />
            <Route path="/faq" element={<AboutPage />} />
            <Route path="/sustainability" element={<AboutPage />} />
            <Route path="/contact" element={<AboutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
