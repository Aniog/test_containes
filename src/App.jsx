import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/collections" element={<CollectionPage />} />
          </Routes>
        </Layout>
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}

export default App;
