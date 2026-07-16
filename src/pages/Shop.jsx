import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  useEffect(() => {
    setLoading(true);
    const filters = activeCategory !== 'All' ? { category: activeCategory } : {};
    fetchProducts(filters)
      .then(data => {
        let sorted = [...data];
        if (sortBy === 'Price: Low to High') sorted.sort((a, b) => a.data.price - b.data.price);
        if (sortBy === 'Price: High to Low') sorted.sort((a, b) => b.data.price - a.data.price);
        
        setProducts(sorted);
        setLoading(false);
      })
      .catch(console.error);
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
        searchParams.delete('category');
    } else {
        searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-4">Shop the Collection</h1>
          <p className="text-velmora-muted max-w-2xl text-sm md:text-base tracking-wide">
            Explore our curated selection of demi-fine gold jewelry. Designed for everyday elegance.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 flex flex-col gap-10">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Categories</h3>
                <div className="flex flex-col gap-4">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={cn(
                        "text-left text-sm tracking-widest uppercase transition-colors hover:text-velmora-accent",
                        activeCategory === cat ? "text-velmora-dark font-bold" : "text-velmora-muted"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Price Range</h3>
                <div className="flex flex-col gap-4 text-sm text-velmora-muted tracking-widest uppercase">
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-dark">
                    <input type="checkbox" className="accent-velmora-dark w-3 h-3" />
                    Under $50
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-dark">
                    <input type="checkbox" className="accent-velmora-dark w-3 h-3" />
                    $50 - $100
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-dark">
                    <input type="checkbox" className="accent-velmora-dark w-3 h-3" />
                    Over $100
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Material</h3>
                <div className="flex flex-col gap-4 text-sm text-velmora-muted tracking-widest uppercase">
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-dark">
                    <input type="checkbox" className="accent-velmora-dark w-3 h-3" />
                    18K Gold Plated
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-velmora-dark">
                    <input type="checkbox" className="accent-velmora-dark w-3 h-3" />
                    Cubic Zirconia
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters Toggle & Sort */}
          <div className="flex justify-between items-center py-4 border-y border-velmora-accent/10 lg:hidden">
            <button 
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
                <SlidersHorizontal size={16} /> Filters
            </button>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
                Sort By <ChevronDown size={16} />
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-10 text-[10px] uppercase tracking-[0.2em] font-bold">
                <span>{products.length} Products</span>
                <div className="flex items-center gap-4">
                    <span className="text-velmora-muted">Sort By:</span>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 cursor-pointer text-velmora-dark"
                    >
                        {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array(6).fill(0).map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-100 aspect-[3/4]" />
                    ))}
                </div>
            ) : products.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-32 text-center text-velmora-muted">
                    <p className="font-serif italic text-lg">No products found for this criteria.</p>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <div className={cn(
        "fixed inset-0 bg-white z-[100] p-8 flex flex-col transition-transform duration-500",
        isFilterOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-serif uppercase tracking-widest">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-10">
            <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Categories</h3>
                <div className="flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                            className={cn(
                                "px-6 py-2 border text-xs tracking-widest uppercase transition-colors",
                                activeCategory === cat ? "bg-velmora-dark text-white border-velmora-dark" : "border-velmora-accent/30 text-velmora-muted"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            {/* Additional filters can be added here for mobile */}
        </div>
        <button 
            onClick={() => setIsFilterOpen(false)}
            className="mt-auto w-full bg-velmora-dark text-white py-4 uppercase tracking-[0.2em] text-xs font-bold"
        >
            Show Results
        </button>
      </div>
    </div>
  );
}
