import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import Collections from '@/pages/Collections';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App
