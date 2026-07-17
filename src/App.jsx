import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { toast } from 'sonner';

const SEED_PRODUCTS = [
  { id: 1, name: 'Vivid Aura Jewels', price: 42, category: 'earrings', description: 'Gold ear cuff with crystal accent. Elegant and effortless.', materials: '18K Gold Plated, Cubic Zirconia' },
  { id: 2, name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', description: 'Multicolor floral crystal necklace. A statement piece.', materials: '18K Gold Plated, Mixed Crystals' },
  { id: 3, name: 'Golden Sphere Huggies', price: 38, category: 'earrings', description: 'Chunky gold dome huggie earrings. A daily essential.', materials: '18K Gold Plated' },
  { id: 4, name: 'Amber Lace Earrings', price: 54, category: 'earrings', description: 'Textured gold filigree drop earrings. Vintage-inspired.', materials: '18K Gold Plated' },
  { id: 5, name: 'Royal Heirloom Set', price: 95, category: 'sets', description: 'Gift-boxed earring + necklace set. The perfect gift.', materials: '18K Gold Plated, Premium Crystals' },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
    toast.success(`Added ${product.name} to bag`);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Layout 
        cart={cart} 
        onUpdateQuantity={updateQuantity} 
        onRemoveItem={removeItem}
        onCartClick={() => setIsCartOpen(true)}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      >
        <Routes>
          <Route path="/" element={<Home products={SEED_PRODUCTS} onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop products={SEED_PRODUCTS} onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail products={SEED_PRODUCTS} onAddToCart={addToCart} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
