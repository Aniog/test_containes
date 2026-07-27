import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/pages/CollectionPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
