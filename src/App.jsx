import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/collections/:category" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--velmora-charcoal)',
            color: 'white',
            border: 'none',
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
