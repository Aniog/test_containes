import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartDrawer from './components/CartDrawer';

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
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette.",
    image: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80",
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
    description: "Intricate textured gold filigree drop earrings inspired by vintage lacework.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set, perfect for gifting or treating yourself.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 203,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');

  // Cart Functions
  const addToCart = (product, variant = 'gold', quantity = 1) => {
    const existingItem = cart.findIndex(
      item => item.id === product.id && item.variant === variant
    );

    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, variant, quantity }]);
    }
    
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} × ${quantity}`,
      duration: 2000,
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
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
            element={
              <HomePage 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route 
            path="/shop" 
            element={
              <ShopPage 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetailPage 
                products={products} 
                addToCart={addToCart} 
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />
            } 
          />
          <Route 
            path="/collections" 
            element={
              <ShopPage 
                products={products} 
                addToCart={addToCart} 
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
