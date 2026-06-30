import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import ProductDetailPage from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
