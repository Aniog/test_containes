import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CollectionPage from './components/collection/CollectionPage.jsx';
import ProductDetail from './components/product/ProductDetail.jsx';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" />
      </CartProvider>
    </Router>
  );
}

export default App;
