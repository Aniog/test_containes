import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CollectionPage from './components/collection/CollectionPage';
import ProductDetailPage from './components/product/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
