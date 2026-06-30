import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { CartProvider } from './components/CartProvider';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import './App.css'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
