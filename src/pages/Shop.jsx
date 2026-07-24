import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, ShoppingBag, X } from 'lucide-react';
import { products } from '@/components/home/Bestsellers';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'newest';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
            {activeCategory} Collection
          </h1>
          <p className="text-zinc-500 text-sm italic">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center border-y border-zinc-100 py-6 mb-12">
          <div className="flex gap-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-zinc-500 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>
            <div className="hidden md:flex gap-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 pb-1",
                    activeCategory === cat ? "border-[#1C1C1C] text-[#1C1C1C]" : "border-transparent text-zinc-400 hover:text-zinc-600"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
              Sort By: {activeSort}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="aspect-[4/5] bg-zinc-100 overflow-hidden relative mb-5">
                <Link to={`/product/${product.id}`}>
                   <img
                    data-strk-img-id={`shop-${product.id}`}
                    data-strk-img={`[shop-${product.id}-name] gold jewelry on white backdrop`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#1C1C1C] text-white py-3 text-[10px] tracking-widest uppercase font-bold hover:bg-zinc-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 id={`shop-${product.id}-name`} className="font-serif text-sm tracking-[0.15em] uppercase mb-1">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              <p className="text-zinc-500 text-sm tracking-wide font-sans">${product.price}</p>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl text-zinc-400 italic">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Filter Sidebar Placeholder */}
      <div className={cn(
        "fixed inset-y-0 left-0 w-80 bg-white z-[70] shadow-2xl p-8 transform transition-transform duration-300 ease-in-out",
        isFilterOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-2xl">Filters</h2>
          <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-400 border-b border-zinc-100 pb-2">Category</h4>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                  className={cn(
                    "text-left text-sm uppercase tracking-widest hover:text-zinc-500 transition-colors",
                    activeCategory === cat ? "font-bold underline underline-offset-4" : "text-zinc-600"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-zinc-400 border-b border-zinc-100 pb-2">Material</h4>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 text-sm tracking-widest text-zinc-600 cursor-pointer">
                <input type="checkbox" checked className="w-4 h-4 accent-zinc-900" readOnly /> 18K Gold Plated
              </label>
              <label className="flex items-center gap-3 text-sm tracking-widest text-zinc-600 cursor-pointer opacity-50">
                <input type="checkbox" className="w-4 h-4 accent-zinc-900" disabled /> Sterling Silver (Soon)
              </label>
            </div>
          </div>
        </div>
      </div>
      {isFilterOpen && <div className="fixed inset-0 bg-black/20 z-[65]" onClick={() => setIsFilterOpen(false)} />}
    </div>
  );
};

export default Shop;
