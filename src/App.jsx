import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';
import './App.css';

// Seed Products
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light beautifully. An heirloom piece.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set. The perfect gift for someone special.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviews: 203,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart Functions
  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      cartId: Date.now(),
      variant,
      quantity,
    };
    setCart([...cart, cartItem]);
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} · ${variant}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateCartQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F6F3]">
        <Navbar 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products={products} 
                addToCart={addToCart}
                onCartClick={() => setIsCartOpen(true)}
              />
            } 
          />
          <Route 
            path="/shop" 
            element={
              <Shop 
                products={products} 
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                products={products} 
                addToCart={addToCart}
              />
            } 
          />
          <Route 
            path="/collections" 
            element={
              <Shop 
                products={products} 
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            } 
          />
        </Routes>

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateCartQuantity}
          total={cartTotal}
        />

        <Toaster position="top-center" richColors closeButton />
      </div>
    </Router>
  );
}

export default App;
