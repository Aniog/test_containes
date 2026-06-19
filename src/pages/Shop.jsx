import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/home/Bestsellers';
import { fetchProducts } from '@/api/products';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const categoryFilter = searchParams.get('category');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    if (categoryFilter) {
      result = result.filter(p => p.data.category === categoryFilter);
    }

    // Sort
    if (sortBy === 'price-low') result.sort((a, b) => a.data.price - b.data.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.data.price - a.data.price);

    setFilteredProducts(result);
  }, [products, categoryFilter, sortBy]);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FDFCFB] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {categoryFilter ? categoryFilter : 'All Jewelry'}
          </h1>
          <p className="text-stone-500 text-sm font-light max-w-lg">
            Discover our collection of demi-fine jewelry. Timeless essentials for every day.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between border-y border-stone-100 py-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold">
               <select 
                className="bg-transparent outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Sort By: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Categories</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setSearchParams({})}
                  className={cn(
                    "block text-sm transition-colors",
                    !categoryFilter ? "text-[#B08D57] font-medium" : "text-stone-500 hover:text-[#1A1A1A]"
                  )}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={cn(
                      "block text-sm transition-colors",
                      categoryFilter === cat ? "text-[#B08D57] font-medium" : "text-stone-500 hover:text-[#1A1A1A]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Price Range</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-[#B08D57]" />
                  <span className="text-sm text-stone-500 hover:text-[#1A1A1A]">Under $50</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-[#B08D57]" />
                  <span className="text-sm text-stone-500 hover:text-[#1A1A1A]">$50 - $100</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-[#B08D57]" />
                  <span className="text-sm text-stone-500 hover:text-[#1A1A1A]">$100+</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Material</h3>
              <div className="space-y-4">
                 <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-[#B08D57]" />
                  <span className="text-sm text-stone-500 hover:text-[#1A1A1A]">18K Gold Plated</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-[#B08D57]" />
                  <span className="text-sm text-stone-500 hover:text-[#1A1A1A]">Sterling Silver</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-end mb-8">
              <div className="relative group">
                <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold">
                  <span>Sort By: {sortBy === 'newest' ? 'Newest' : sortBy === 'price-low' ? 'Price Low' : 'Price High'}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-stone-100 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm space-y-3">
                   <button onClick={() => setSortBy('newest')} className="block text-[10px] uppercase tracking-widest hover:text-[#B08D57]">Newest</button>
                   <button onClick={() => setSortBy('price-low')} className="block text-[10px] uppercase tracking-widest hover:text-[#B08D57]">Price Low to High</button>
                   <button onClick={() => setSortBy('price-high')} className="block text-[10px] uppercase tracking-widest hover:text-[#B08D57]">Price High to Low</button>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-stone-100 mb-4 rounded-sm" />
                    <div className="h-4 bg-stone-100 w-2/3 mb-2" />
                    <div className="h-4 bg-stone-100 w-1/4" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 font-light mb-4">No products found in this category.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1"
                >
                  Show All Items
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

       {/* Mobile Filter Drawer */}
       {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 overflow-y-auto">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-12">
             <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Categories</h3>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => { setSearchParams({}); setIsSidebarOpen(false); }}
                    className={cn("px-4 py-2 text-[10px] uppercase tracking-widest border border-stone-200 rounded-full", !categoryFilter && "bg-[#1A1A1A] text-white border-[#1A1A1A]")}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => { setSearchParams({ category: cat }); setIsSidebarOpen(false); }}
                      className={cn("px-4 py-2 text-[10px] uppercase tracking-widest border border-stone-200 rounded-full", categoryFilter === cat && "bg-[#1A1A1A] text-white border-[#1A1A1A]")}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              {/* Other filters could go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
