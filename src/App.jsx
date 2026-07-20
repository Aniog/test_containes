import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Collection from './pages/Collection';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
