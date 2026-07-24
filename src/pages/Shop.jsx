import React, { useState } from 'react';
import { PRODUCTS } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { 
  ChevronDown, 
  Filter, 
  SlidersHorizontal 
} from 'lucide-react';
import {
  Separator
} from "@/components/ui/separator";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  const filteredProducts = PRODUCTS.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Discover</span>
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl uppercase tracking-[0.2em]">The Collection</h1>
          <p id="shop-subtitle" className="text-muted-foreground font-light text-sm max-w-lg leading-relaxed">
            Meticulously crafted pieces designed to elevate the everyday and celebrate the extraordinary.
          </p>
        </div>

        {/* Controls */}
        <div className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-sm pt-4 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b">
          <div className="flex gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] whitespace-nowrap transition-all ${
                  selectedCategory === cat ? 'text-accent font-bold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
              <SlidersHorizontal size={14} className="group-hover:rotate-12 transition-transform" />
              Filter
            </button>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground transition-colors group">
              Sort: <span className="text-foreground font-bold">{sortBy}</span>
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center flex flex-col items-center gap-6">
            <p className="font-serif text-2xl italic opacity-30">No pieces found in this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')} 
              className="font-sans text-xs uppercase tracking-widest underline underline-offset-8"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
