import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collection" element={<Collection />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
