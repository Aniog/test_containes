import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collection/:category" element={<Shop />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
