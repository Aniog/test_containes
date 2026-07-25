import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import About from './pages/About';
import FAQ from './pages/FAQ';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';

console.log('App.jsx: Loading full application...');

function App() {
  console.log('App.jsx: Rendering App component...');
  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/help" element={<Layout><FAQ /></Layout>} />
          <Route path="/collections" element={<Layout><Shop /></Layout>} />
          <Route path="/journal" element={<Layout><div className="container-custom py-20 text-center"><h1 className="font-serif text-4xl">Journal Coming Soon</h1></div></Layout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
