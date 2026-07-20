import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Layout from '@/components/Layout.jsx';
import Home from '@/pages/Home.jsx';
import Collection from '@/pages/Collection.jsx';
import ProductDetail from '@/pages/ProductDetail.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
