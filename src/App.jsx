import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/about" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="font-serif text-4xl">About Velmora</h1></div>} />
            <Route path="/journal" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="font-serif text-4xl">Journal</h1></div>} />
            <Route path="/contact" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="font-serif text-4xl">Contact Us</h1></div>} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
