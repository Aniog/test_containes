import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="collections" element={<ShopPage />} />
            <Route path="collections/:category" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
