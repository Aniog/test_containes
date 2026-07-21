import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/home/Homepage';
import ProductDetail from './components/product/ProductDetail';
import ShopPage from './components/product/ShopPage';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
