import { useState } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FruitGrid from '@/components/home/FruitGrid';
import Features from '@/components/home/Features';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (fruit) => {
    setCartCount((c) => c + 1);
    toast.success(`${fruit.name} added to cart!`, {
      description: `$${fruit.price.toFixed(2)} per ${fruit.unit}`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Toaster position="bottom-right" />
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories />
      <FruitGrid onAddToCart={handleAddToCart} />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
