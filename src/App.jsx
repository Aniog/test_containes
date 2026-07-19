import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetail from '@/components/product/ProductDetail';
import AboutPage from '@/pages/AboutPage';
import JournalPage from '@/pages/JournalPage';
import HelpPage from '@/pages/HelpPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="help" element={<HelpPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
