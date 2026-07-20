import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import CollectionPage from '@/pages/CollectionPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" richColors />
      </CartProvider>
    </Router>
  );
}

export default App;
