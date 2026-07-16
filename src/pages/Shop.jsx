import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductCard from '../components/home/ProductCard';
import { products } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    categories: [],
    materials: [],
    priceRange: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setFilters(prev => ({ ...prev, categories: [categoryParam] }));
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, []);

  // Load images
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters, sortBy, searchQuery]);

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Material filter (simulated - all products have both variants)
    // In real app, products would have a primary material

    // Price filter
    if (filters.priceRange) {
      result = result.filter(p => 
        p.price >= filters.priceRange.min && 
        p.price < filters.priceRange.max
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({ categories: [], materials: [], priceRange: null });
    setSearchQuery('');
    setSearchParams({});
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F5F1]">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E5DDD1]">
          <h1 className="font-serif text-4xl tracking-wide">Shop All</h1>
          <p className="text-[#5C4E42] mt-2">Demi-fine gold jewelry, crafted for everyday elegance.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="lg:w-56 flex-shrink-0">
              <FilterSidebar 
                filters={filters} 
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E5DDD1]">
                <p className="text-sm text-[#8C7660]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#8C7660]">SORT:</span>
                  <select 
                    value={sortBy} 
                    onChange={handleSortChange}
                    className="sort-select"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-[#5C4E42] mb-4">No products match your filters.</p>
                  <button onClick={handleClearFilters} className="btn btn-outline text-sm">
                    CLEAR FILTERS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
