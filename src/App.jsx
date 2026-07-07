import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import CollectionPage from './pages/CollectionPage';
import CartDrawer from './components/cart/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-serif text-4xl">About Page - Coming Soon</h1></div>} />
            <Route path="/journal" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-serif text-4xl">Journal Page - Coming Soon</h1></div>} />
          </Routes>
        </Layout>
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}

export default App;
