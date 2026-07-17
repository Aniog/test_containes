import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const dummyConfig = {};

const Collection = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    try {
      ImageHelper.loadImages(dummyConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper setup pending');
    }
  }, [activeCategory, sortOption]); // Re-run when products list changes

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  // Filter
  let filteredProducts = activeCategory === 'All' 
    ? [...products] 
    : products.filter(p => p.category === activeCategory);

  // Sort
  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'az') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div ref={containerRef} className="pt-28 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-brand-950">
          The Collection
        </h1>
        <p className="text-muted-foreground">Everyday heirlooms designed to be layered, loved, and lived in.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center pb-4 border-b border-border">
          <span className="text-sm uppercase tracking-widest">{filteredProducts.length} Results</span>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center text-sm uppercase tracking-widest border border-border px-4 py-2"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="sticky top-28">
            <div className="mb-10">
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-border pb-4">Category</h3>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false); // Close on mobile after selection
                      }}
                      className={`text-sm tracking-wide ${activeCategory === cat ? 'text-brand-950 font-medium' : 'text-muted-foreground hover:text-brand-950'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-border pb-4">Sort By</h3>
              <div className="relative">
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full appearance-none bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand-950 rounded-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="az">A-Z</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Showing {activeCategory}</span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">{filteredProducts.length} Products</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Collection;
