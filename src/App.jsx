import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ShopPageWrapper from '@/pages/ShopPageWrapper';
import ProductDetailPageWrapper from '@/pages/ProductDetailPageWrapper';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPageWrapper />} />
            <Route path="/product/:slug" element={<ProductDetailPageWrapper />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;

