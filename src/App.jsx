import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/components/collection/CollectionPage';
import ProductDetail from '@/components/product/ProductDetail';
import './App.css';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
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
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" richColors />
      </CartProvider>
    </Router>
  );
}

export default App;
