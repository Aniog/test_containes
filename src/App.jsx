import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:category" element={<Collection />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
