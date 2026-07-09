import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = ({ products, addToCart }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
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
        // featured - keep original order
        break;
    }

    return result;
  }, [products, selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B6560]">DISCOVER</p>
            <h1 className="serif text-5xl">The Collection</h1>
          </div>
          <div className="hidden md:block">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E5E0D8] px-4 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <div className="lg:w-56 flex-shrink-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-between w-full mb-4 text-sm tracking-widest"
            >
              FILTERS <ChevronDown className={showFilters ? 'rotate-180' : ''} size={16} />
            </button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Categories */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976F]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8976F]"
                  />
                  <div className="flex justify-between text-sm text-[#6B6560]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 120]);
                }}
                className="text-xs tracking-widest text-[#B8976F] hover:underline"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-[#E5E0D8] px-4 py-2 text-sm focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
              <span className="text-sm text-[#6B6560]">{filteredProducts.length} products</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B6560]">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;