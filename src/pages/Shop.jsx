import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filters from URL
  const categoryFilter = searchParams.get('category') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');

  // Update URL params helper
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || value === 'featured' || (key === 'minPrice' && value === 0) || (key === 'maxPrice' && value === 200)) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, sortOption, minPrice, maxPrice]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'A - Z' },
  ];

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#2C2823]">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#C5A46E]">THE COLLECTION</span>
            <h1 className="font-serif text-4xl md:text-5xl tracking-[-1px] mt-1">All Jewelry</h1>
          </div>
          <p className="text-sm text-[#6B665F] mt-2 md:mt-0">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile filter toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-[#E8E4DC] px-4 py-3 mb-4 text-sm tracking-[1px]"
            >
              FILTERS
              <ChevronDown className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Category */}
              <div>
                <p className="text-xs tracking-[2px] mb-3 text-[#6B665F]">CATEGORY</p>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${categoryFilter === cat ? 'text-[#C5A46E] font-medium' : 'text-[#2C2823] hover:text-[#C5A46E]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-xs tracking-[2px] mb-3 text-[#6B665F]">PRICE RANGE</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span>$</span>
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => updateFilter('minPrice', parseInt(e.target.value) || 0)}
                      className="w-16 border border-[#E8E4DC] px-2 py-1 text-sm" 
                    />
                    <span>to</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => updateFilter('maxPrice', parseInt(e.target.value) || 200)}
                      className="w-16 border border-[#E8E4DC] px-2 py-1 text-sm" 
                    />
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={maxPrice}
                    onChange={(e) => updateFilter('maxPrice', parseInt(e.target.value))}
                    className="w-full accent-[#C5A46E]"
                  />
                </div>
              </div>

              {/* Clear */}
              {(categoryFilter !== 'All' || minPrice > 0 || maxPrice < 200) && (
                <button onClick={clearFilters} className="text-xs tracking-[1.5px] text-[#C5A46E] hover:underline">
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-5">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6B665F] hidden sm:inline">SORT BY</span>
                <select 
                  value={sortOption} 
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-transparent border border-[#E8E4DC] px-4 py-2 text-sm tracking-[1px] focus:outline-none cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>CLEAR FILTERS</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;