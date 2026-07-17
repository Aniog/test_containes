import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { Search, ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">Shop All</h1>
          <p className="text-xs uppercase tracking-widest text-muted font-light">
            Discover our collection of curated demi-fine pieces.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex items-center justify-between gap-6 border-b border-border md:border-none pb-4 md:pb-0">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap",
                  activeCategory === cat ? "text-primary border-b border-primary pb-1" : "text-muted hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
            <span className="text-muted">Sort:</span>
            <select 
              className="bg-transparent focus:outline-none cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] bg-secondary/50 overflow-hidden mb-6">
                <Link to={`/product/${product.id}`}>
                  <img
                    data-strk-img-id={`shop-prod-${product.id}`}
                    data-strk-img={`an editorial photo of ${product.name} jewelry on a neutral background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.name} added to bag`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary py-3 text-[10px] uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              <Link to={`/product/${product.id}`} className="text-left">
                <h3 className="text-[10px] uppercase tracking-widest mb-2 font-bold">{product.name}</h3>
                <p className="text-sm font-light text-muted">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
