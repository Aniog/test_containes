import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/shared/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    let result = [...products];

    // Filter
    if (categoryParam && categoryParam.toLowerCase() !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
    }

    // Sort
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [categoryParam, sortOption]);

  // Make sure dynamically rendered images load
  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [filteredProducts]);

  const handleCategoryClick = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      
      {/* Page Header */}
      <div className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif text-stone-900 tracking-wide mb-4">
            {categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'All Jewelry'}
          </h1>
          <p className="text-stone-500 font-light center max-w-lg mx-auto">
            Discover our complete collection of demi-fine jewelry designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={containerRef}>
        
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-200">
          <button 
            className="md:hidden flex items-center space-x-2 text-stone-600 text-sm uppercase tracking-widest"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
          
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-stone-500">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`pb-1 border-b-2 transition-colors ${
                  (categoryParam?.toLowerCase() === cat.toLowerCase() || (!categoryParam && cat === 'All'))
                    ? 'border-stone-900 text-stone-900' 
                    : 'border-transparent hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-stone-600 text-sm uppercase tracking-widest">
              <span>Sort: {sortOption.replace('-', ' ')}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-stone-50 border border-stone-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <div className="py-2 flex flex-col">
                <button 
                  onClick={() => setSortOption('featured')} 
                  className="px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100"
                >
                  Featured
                </button>
                <button 
                  onClick={() => setSortOption('price-low')} 
                  className="px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100"
                >
                  Price: Low to High
                </button>
                <button 
                  onClick={() => setSortOption('price-high')} 
                  className="px-4 py-2 text-left text-sm text-stone-700 hover:bg-stone-100"
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {isMobileFilterOpen && (
          <div className="md:hidden mb-8 p-4 bg-stone-100 border border-stone-200">
            <div className="flex flex-col space-y-4 text-sm uppercase tracking-widest text-stone-600">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-left ${
                    (categoryParam?.toLowerCase() === cat.toLowerCase() || (!categoryParam && cat === 'All'))
                      ? 'text-stone-900 font-medium' 
                      : ''
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-stone-500">
            <p>No products found in this category.</p>
            <button 
              onClick={() => handleCategoryClick('All')}
              className="mt-4 underline underline-offset-4 hover:text-stone-900"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
