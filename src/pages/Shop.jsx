import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read URL params
  const urlCategory = searchParams.get('category');
  const urlSearch = searchParams.get('search') || '';

  // Filter states (initialized from URL)
  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory ? [urlCategory] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = urlSearch;

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

    // Material filter (simulated via variant availability)
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.variants?.includes(selectedMaterial));
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
  }, [searchQuery, selectedCategories, priceRange, selectedMaterial, sortBy]);

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSelectedMaterial('All');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    priceRange[0] !== 0 || priceRange[1] !== 120 || 
    selectedMaterial !== 'All' || searchQuery;

  return (
    <div className="min-h-screen pt-20 bg-[#F8F5F1]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Collection</span>
            <h1 className="heading-serif text-4xl mt-1">All Jewelry</h1>
          </div>
          
          {/* Sort + Mobile Filter Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#D9D2C8] px-4 py-2 pr-10 text-sm cursor-pointer focus:outline-none focus:border-[#B89778]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B635C]" />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn btn-sm btn-outline"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* FILTER SIDEBAR */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 bg-white p-6 border border-[#D9D2C8]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm tracking-[0.06em] uppercase font-medium">Filters</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[#B89778] hover:underline flex items-center gap-1"
                  >
                    Clear <X size={12} />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                <div className="space-y-2 mt-3">
                  {categories.filter(c => c !== 'All').map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B89778]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <div className="filter-label mb-3">Price Range</div>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex justify-between text-xs text-[#6B635C] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <div className="filter-label">Material</div>
                <div className="mt-3 space-y-2">
                  {['All', 'Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-[#B89778]"
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {searchQuery && (
              <div className="mb-4 text-sm text-[#6B635C]">
                Showing results for "<span className="text-[#1A1816]">{searchQuery}</span>"
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B635C]">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-gold mt-4">
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-12 text-center text-xs text-[#6B635C] tracking-wide">
              {filteredProducts.length} pieces
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
