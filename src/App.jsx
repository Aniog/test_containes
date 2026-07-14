import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './lib/cart-context';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { ProductDetail } from './pages/ProductDetail';
// Add Toaster
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Collection />} />
            <Route path="collections" element={<Collection />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </CartProvider>
  )
}

export default App
