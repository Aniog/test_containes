import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';

// Seed Products
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Each piece tells a story of natural beauty.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined for everyday wear.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with a textured gold finish. Inspired by vintage heirloom jewelry.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 73,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in our signature velvet box.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviews: 42,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');

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
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
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
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F6F3]">
        <Navbar 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route 
            path="/shop" 
            element={
              <Shop 
                products={products} 
                addToCart={addToCart} 
              />
            } 
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
          <Route 
            path="/collections" 
            element={
              <Shop 
                products={products} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/journal" 
            element={<Journal />} 
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
    </BrowserRouter>
  );
}

// About Page
function About() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="serif text-5xl md:text-6xl text-center mb-8">Our Story</h1>
        <div className="prose prose-lg mx-auto text-[#6B6560] space-y-6 text-center">
          <p>Velmora was born from a simple belief: that fine jewelry should be accessible without compromise.</p>
          <p>Each piece is crafted with intention, using only the finest materials and traditional techniques passed down through generations of artisans.</p>
          <p>We believe in quiet luxury—the kind that whispers rather than shouts. Jewelry that becomes part of your story, worn daily and treasured forever.</p>
        </div>
      </div>
    </div>
  );
}

// Journal Page
function Journal() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="serif text-5xl md:text-6xl text-center mb-12">Journal</h1>
        <div className="space-y-12">
          {[
            { title: "The Art of Layering", date: "June 2026", excerpt: "How to create meaningful stacks that tell your story." },
            { title: "Caring for Your Gold", date: "May 2026", excerpt: "Simple rituals to keep your pieces radiant for years." },
            { title: "Behind the Craft", date: "April 2026", excerpt: "Meet the artisans who bring each design to life." },
          ].map((post, i) => (
            <article key={i} className="border-b border-[#E5E0D8] pb-12 last:border-0">
              <p className="text-sm text-[#6B6560] mb-2">{post.date}</p>
              <h2 className="serif text-3xl mb-4">{post.title}</h2>
              <p className="text-[#6B6560]">{post.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-sm tracking-widest text-[#B8976F] hover:underline">READ MORE →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
