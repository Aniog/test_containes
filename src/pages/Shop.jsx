import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const searchQuery = searchParams.get('search') || '';

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

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

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
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120 || searchQuery;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-1">DISCOVER</div>
          <h1 className="font-serif text-4xl tracking-[0.04em]">The Collection</h1>
          {searchQuery && (
            <p className="text-sm text-[#6B6058] mt-2">Showing results for "{searchQuery}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-[#E5DFD6] px-4 py-3 mb-4 text-sm"
            >
              FILTERS
              <ChevronDown className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Categories */}
              <div>
                <div className="filter-label mb-3">Category</div>
                <div className="space-y-2 text-sm">
                  {[
                    { id: 'earrings', label: 'Earrings' },
                    { id: 'necklaces', label: 'Necklaces' },
                    { id: 'huggies', label: 'Huggies' },
                  ].map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="accent-[#B89778]"
                      />
                      <span>{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label mb-3">Material</div>
                <div className="space-y-2 text-sm">
                  {['gold', 'silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B89778]"
                      />
                      <span className="capitalize">{mat} Tone</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label mb-3">Price Range</div>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex justify-between text-xs text-[#6B6058]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-[0.1em] underline text-[#6B6058] hover:text-[#2C2522]"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5DFD6]">
              <div className="text-sm text-[#6B6058]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6B6058] hidden sm:inline">Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input py-1.5 text-sm bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-[#6B6058] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
