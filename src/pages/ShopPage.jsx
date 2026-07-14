import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronDown } from 'lucide-react';

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
        break;
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-2">Discover</div>
            <h1 className="serif text-6xl tracking-[-0.01em]">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="md:hidden text-sm tracking-[0.1em] uppercase"
            >
              Filters
            </button>
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#E5E0D8] px-4 py-2 pr-10 text-sm tracking-[0.05em] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A–Z</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#C5A26F]">Category</div>
                <div className="space-y-2.5 text-sm">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#C5A26F]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#C5A26F]">Price Range</div>
                <div className="space-y-3 text-sm">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A26F]"
                  />
                  <div className="flex justify-between text-[#6B6B6B]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 120]);
                  setSortBy('featured');
                }}
                className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] hover:text-[#C5A26F]"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="text-sm text-[#6B6B6B] mb-6 tracking-[0.05em]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-[#6B6B6B]">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;