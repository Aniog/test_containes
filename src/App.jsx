import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1714',
            color: '#faf8f5',
            border: '1px solid #2a2520',
            borderRadius: '0',
            fontSize: '13px',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
