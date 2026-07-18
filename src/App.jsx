import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ShopPage from '@/pages/ShopPage.jsx';
import ProductPage from '@/pages/ProductPage.jsx';

function App() {
  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      const navigate = window.__STRK_NAVIGATE__;
      if (navigate) {
        navigate(path, { replace });
      }
    };
  }

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

