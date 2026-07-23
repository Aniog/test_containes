import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/components/home/HomePage';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import CollectionPage from '@/components/product/CollectionPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/collections" element={<CollectionPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
