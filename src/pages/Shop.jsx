import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Filter, LayoutGrid, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../components/collection/ProductCard.jsx';
import { cn } from '../lib/utils';

const products = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", price: 68, category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", price: 54, category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", price: 95, category: "Sets", imgId: "prod-5" },
  { id: 6, name: "Midnight Moon Necklace", price: 72, category: "Necklaces", imgId: "prod-6" },
  { id: 7, name: "Starlet Studs", price: 28, category: "Earrings", imgId: "prod-7" },
  { id: 8, name: "Celestial Choker", price: 110, category: "Necklaces", imgId: "prod-8" },
];

const Shop = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePrice, setActivePrice] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("Recommended");

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePrice, sortOrder]);

  const filteredProducts = products.filter(p => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const priceMatch = activePrice === "All" || 
      (activePrice === "$0 - $50" && p.price <= 50) ||
      (activePrice === "$50 - $100" && p.price > 50 && p.price <= 100) ||
      (activePrice === "$100+" && p.price > 100);
    return catMatch && priceMatch;
  });

  return (
    <div ref={containerRef} className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 px-6 border-b border-gray-100 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 id="shop-title" className="text-4xl md:text-6xl font-serif mb-4">Shop All</h1>
          <p id="shop-sub" className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Timeless treasures for every day.</p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center bg-white sticky top-16 z-30 py-4 border-b md:border-none border-gray-100">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors lg:hidden"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          {["All", "Earrings", "Necklaces", "Huggies", "Sets"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn("hover:text-foreground transition-colors", activeCategory === cat && "text-foreground border-b border-primary")}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold hidden md:inline">{filteredProducts.length} Items</span>
          <div className="relative group">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors">
              Sort: {sortOrder}
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 p-2 flex flex-col gap-2 z-50">
              {["Recommended", "Newest", "Price: Low to High", "Price: High to Low"].map(opt => (
                <button
                  key={opt}
                  onClick={() => setSortOrder(opt)}
                  className="text-left px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 lg:flex gap-12">
        {/* Sidebar Desktop */}
        <aside className="hidden lg:flex flex-col gap-12 w-64 flex-shrink-0 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest font-bold border-b border-gray-100 pb-4">Style</h3>
            <div className="flex flex-col gap-3 text-xs tracking-widest text-gray-500 font-medium">
              {["All", "Minimalist", "Bold", "Statement", "Bridal"].map(style => (
                <button key={style} className="text-left hover:text-primary transition-colors">{style}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest font-bold border-b border-gray-100 pb-4">Price</h3>
            <div className="flex flex-col gap-3 text-xs tracking-widest text-gray-500 font-medium">
              {["All", "$0 - $50", "$50 - $100", "$100+"].map(price => (
                <button 
                  key={price} 
                  onClick={() => setActivePrice(price)}
                  className={cn("text-left hover:text-primary transition-colors", activePrice === price && "text-primary font-bold")}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest font-bold border-b border-gray-100 pb-4">Material</h3>
            <div className="flex flex-col gap-3 text-xs tracking-widest text-gray-500 font-medium">
              {["18K Gold Plated", "Sterling Silver"].map(mat => (
                <button key={mat} className="text-left hover:text-primary transition-colors">{mat}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <p className="font-serif text-2xl text-gray-400 italic">No products found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory("All"); setActivePrice("All"); }}
                className="text-xs uppercase tracking-widest font-bold border-b border-primary pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100]" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-[110] p-8 flex flex-col gap-12 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-sm uppercase tracking-widest font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}><X size={24}/></button>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-widest font-bold">Category</h3>
              <div className="grid grid-cols-2 gap-2">
                {["All", "Earrings", "Necklaces", "Huggies", "Sets"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn("py-3 text-[10px] uppercase font-bold tracking-widest border border-gray-100", activeCategory === cat ? "bg-primary text-white" : "text-gray-400")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-widest font-bold">Price Range</h3>
              <div className="flex flex-col gap-3">
                {["All", "$0 - $50", "$50 - $100", "$100+"].map(price => (
                  <button
                    key={price}
                    onClick={() => setActivePrice(price)}
                    className={cn("text-left text-xs uppercase tracking-widest font-medium py-2", activePrice === price ? "text-primary" : "text-gray-400")}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="mt-auto bg-primary text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors"
            >
              See {filteredProducts.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
