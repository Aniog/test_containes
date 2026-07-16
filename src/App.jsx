import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

console.log('[App] module loaded');

function App() {
  console.log('[App] rendering');
  try {
    return (
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    );
  } catch (e) {
    console.error('[App] render error:', e);
    return <div style={{color:'red', padding:20}}>App error: {e.message}</div>;
  }
}

export default App;
