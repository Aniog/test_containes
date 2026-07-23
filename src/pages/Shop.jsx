import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';

  // Initialize from URL params
  React.useEffect(() => {
    if (categoryParam && categoryParam !== 'Collections') {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
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
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Discover</p>
            <h1 className="text-5xl">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-sm tracking-[0.1em] uppercase flex items-center gap-1"
            >
              Filters <ChevronDown size={16} />
            </button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="input py-2 text-sm w-auto"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A–Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0 space-y-8`}>
            <div>
              <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#8B7355]">Category</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#8B7355]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#8B7355]">Price Range</div>
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  step="5"
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355]"
                />
                <div className="flex justify-between text-sm text-[#6B635E]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {(selectedCategories.length > 0 || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSearchParams({});
                }}
                className="text-xs tracking-[0.1em] uppercase text-[#8B7355] hover:text-[#2C2522]"
              >
                Clear Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B635E]">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
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