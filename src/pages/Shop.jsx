import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  const filteredProducts = products.filter(p => 
    categoryFilter === 'All' || p.data.category === categoryFilter
  ).sort((a, b) => {
    if (sortOption === 'price-asc') return a.data.price - b.data.price;
    if (sortOption === 'price-desc') return b.data.price - a.data.price;
    return 0; // Default featured
  });

  const updateFilter = (type, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-wide uppercase">Shop All</h1>
        <p className="text-gray-500 font-light max-w-xl mx-auto">
          Explore our collection of demi-fine gold jewelry, designed with a focus on quality, versatility, and everyday luxury.
        </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        {/* Sidebar Filter - Desktop */}
        <aside className="hidden md:block w-64 space-y-12 shrink-0">
          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-8 border-b border-[#E5E5E5] pb-4">Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => updateFilter('category', cat)}
                    className={cn(
                      "text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors",
                      categoryFilter === cat ? "text-[#C5A059] font-medium" : "text-gray-400 font-light"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-8 border-b border-[#E5E5E5] pb-4">Material</h3>
            <ul className="space-y-4 text-gray-400 text-sm uppercase tracking-widest font-light">
              <li className="flex items-center space-x-2">
                <input type="checkbox" checked readOnly className="accent-[#C5A059]" />
                <span>18K Gold Plated</span>
              </li>
              <li className="flex items-center space-x-2 opacity-30">
                <input type="checkbox" disabled className="accent-[#C5A059]" />
                <span>Sterling Silver</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Mobile Filter Trigger */}
        <div className="md:hidden flex justify-between items-center border-b border-[#E5E5E5] pb-6">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center uppercase tracking-widest text-[10px] space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <div className="flex items-center space-x-2 uppercase tracking-widest text-[10px]">
            <span>Sort By:</span>
            <select 
              value={sortOption}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="bg-transparent focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-10 text-[10px] uppercase tracking-widest text-gray-500">
            <span>Showing {filteredProducts.length} Results</span>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span>View:</span>
                <button className="text-[#1A1A1A]">Grid</button>
                <button className="opacity-30">List</button>
              </div>
              <div className="flex items-center space-x-2">
                <span>Sort By:</span>
                <select 
                  value={sortOption}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-transparent focus:outline-none text-[#1A1A1A] cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-[#E5E5E5]">
              <p className="font-serif italic text-lg text-gray-400">No pieces found in this category.</p>
              <button 
                onClick={() => updateFilter('category', 'All')}
                className="mt-6 uppercase tracking-widest text-[10px] border-b border-[#1A1A1A] pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-[#F9F7F2] transform transition-transform duration-500 md:hidden",
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Filter</h2>
            <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="uppercase tracking-widest text-xs font-medium mb-6">Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      updateFilter('category', cat);
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      "px-6 py-3 text-[10px] uppercase tracking-widest border transition-colors",
                      categoryFilter === cat ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-[#E5E5E5] text-gray-500"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
