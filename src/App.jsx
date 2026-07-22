import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/components/collection/CollectionPage';
import ProductDetail from '@/components/product/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
