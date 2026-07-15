import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CollectionPage from '@/pages/CollectionPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout transparentNav>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <CollectionPage />
              </Layout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Layout>
                <ProductDetailPage />
              </Layout>
            }
          />
        </Routes>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#FAF8F5',
              border: 'none',
              borderRadius: '0',
              fontSize: '13px',
              letterSpacing: '0.05em',
            },
          }}
        />
      </CartProvider>
    </Router>
  );
}

export default App;
