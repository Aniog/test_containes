import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';
import './App.css';

// Seed product data
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A stunning multicolor floral crystal necklace that captures light beautifully. An elegant statement piece.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a modern sculptural silhouette. Lightweight and comfortable for everyday wear.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricately textured gold filigree drop earrings inspired by vintage lace patterns. A romantic, heirloom-quality piece.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    rating: 4.6,
    reviews: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A beautifully gift-boxed matching set featuring our signature earrings and necklace. The perfect gift for someone special.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');

  // Cart functions
  const addToCart = (product, variant = 'gold', quantity = 1) => {
    const cartItem = {
      ...product,
      variant,
      cartId: `${product.id}-${variant}`,
    };
    
    setCart(prevCart => {
      const existing = prevCart.find(item => item.cartId === cartItem.cartId);
      if (existing) {
        return prevCart.map(item =>
          item.cartId === cartItem.cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...cartItem, quantity }];
    });
    
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} · ${variant} tone`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
  };

  const updateCartQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navbar 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <Routes>
          <Route 
            path="/" 
            element={<Home products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/shop" 
            element={<Shop products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                products={products} 
                addToCart={addToCart}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />
            } 
          />
        </Routes>
        
        <Footer />
        
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
