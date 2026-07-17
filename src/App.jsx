import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Collection from './pages/Collection';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="collection" element={<Collection />} />
            <Route path="collection/:category" element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
