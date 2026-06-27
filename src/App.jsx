import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { CartContext } from './context/CartContext';

const seedProducts = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette.",
    image: "https://images.unsplash.com/photo-1535632787350-4e68b0b0e1a0?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings with an heirloom-inspired design.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.6,
    reviews: 73
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    category: "Earrings",
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set, perfect for gifting or treating yourself.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 201
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
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
    
    toast.success('Added to cart', {
      description: `${product.name} (${variant})`,
      duration: 2000,
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, setIsCartOpen }}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F8F5F1]">
          <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
          
          <Routes>
            <Route path="/" element={<Home products={seedProducts} />} />
            <Route path="/shop" element={<Shop products={seedProducts} />} />
            <Route path="/product/:id" element={<ProductDetail products={seedProducts} />} />
          </Routes>
          
          <Footer />
          
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            total={cartTotal}
          />
          
          <Toaster position="top-center" richColors closeButton />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
