import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => String(b.id).localeCompare(String(a.id)));
    }

    setFilteredProducts(result);
  }, [products, activeCategory, sortBy]);

  useEffect(() => {
    if (!loading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, filteredProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const materials = ['18K Gold Vermeil', 'Sterling Silver', 'Rose Gold'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-serif text-stone-900">Collections</h1>
            <p className="text-stone-400 text-sm font-sans tracking-widest uppercase">
              {activeCategory} ({filteredProducts.length})
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-8">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-semibold hover:text-[#9a7b4f] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-semibold group-hover:text-[#9a7b4f] transition-colors">
                <span>Sort: {sortBy.replace('-', ' ')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-stone-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 py-2">
                {['newest', 'price-low', 'price-high'].map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors",
                      sortBy === option ? "text-[#9a7b4f] font-bold" : "text-stone-500"
                    )}
                  >
                    {option.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className={cn(
            "lg:w-64 space-y-12 transition-all duration-500 overflow-hidden",
            isSidebarOpen ? "w-full opacity-100 scale-y-100 h-auto mb-12 lg:mb-0" : "w-0 opacity-0 scale-y-0 h-0 lg:w-64 lg:opacity-100 lg:scale-y-100 lg:h-auto"
          )}>
            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-900 pb-2 border-b border-stone-100">Category</h3>
              <div className="flex flex-col space-y-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={cn(
                      "text-left text-sm font-sans transition-colors",
                      activeCategory === cat ? "text-[#9a7b4f] font-medium" : "text-stone-400 hover:text-stone-900"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-900 pb-2 border-b border-stone-100">Price Range</h3>
              <div className="flex flex-col space-y-4 text-sm text-stone-400 font-sans">
                {['Under $50', '$50 - $100', 'Over $100'].map(range => (
                  <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-3 h-3 border border-stone-300 rounded-none group-hover:border-[#9a7b4f]" />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-900 pb-2 border-b border-stone-100">Material</h3>
              <div className="flex flex-col space-y-4 text-sm text-stone-400 font-sans">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-3 h-3 border border-stone-300 rounded-none group-hover:border-[#9a7b4f]" />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <div key={n} className="animate-pulse space-y-4">
                    <div className="aspect-[3/4] bg-stone-100" />
                    <div className="h-4 bg-stone-100 w-2/3" />
                    <div className="h-3 bg-stone-100 w-1/3" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center space-y-4 italic text-stone-400 font-serif">
                <p>No products found in this category.</p>
                <button onClick={() => setSearchParams({ category: 'All' })} className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1">Show All Products</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
