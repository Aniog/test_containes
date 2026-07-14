import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Shop } from './pages/Shop.jsx';
import { Product } from './pages/Product.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections/:category" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;