import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;