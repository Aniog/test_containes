import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { formatPrice } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  const materials = ['18K Gold Plated', 'Sterling Silver'];

  // Filter and sort products
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

    // Material filter (simplified - check product material string)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => {
        return selectedMaterials.some(m => p.material.includes(m));
      });
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
  }, [selectedCategories, priceRange, selectedMaterials, sortBy, searchQuery]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120 || searchQuery;

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pt-6">
          <div>
            <p className="uppercase tracking-[0.12em] text-xs text-[#6B665F]">Curated Collection</p>
            <h1 className="heading-serif text-4xl">Shop All</h1>
          </div>
          
          {/* Sort */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs tracking-widest text-[#6B665F] hidden sm:inline">SORT</span>
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#E5DFD6] py-2 pl-4 pr-9 text-sm focus:outline-none focus:border-[#C5A46E]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A — Z</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-3.5 pointer-events-none text-[#6B665F]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-full mb-4 py-2 border border-[#E5DFD6] text-sm tracking-widest"
            >
              {mobileFiltersOpen ? 'HIDE FILTERS' : 'SHOW FILTERS'}
            </button>

            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Active Filters */}
              {hasActiveFilters && (
                <div>
                  <button 
                    onClick={clearFilters}
                    className="text-xs tracking-widest text-[#C5A46E] hover:underline"
                  >
                    CLEAR ALL FILTERS
                  </button>
                </div>
              )}

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#C5A46E]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A46E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-2 text-sm">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#C5A46E]"
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {searchQuery && (
              <p className="mb-4 text-sm text-[#6B665F]">Showing results for "{searchQuery}"</p>
            )}
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B665F]">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm tracking-widest hover:text-[#C5A46E]">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
