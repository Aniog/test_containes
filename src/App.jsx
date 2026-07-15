import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<ShopPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
