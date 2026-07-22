import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  // Available materials from products
  const availableMaterials = ['18K Gold Plated Brass', 'Crystal', 'Multicolor Crystals'];

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

    // Material filter (simplified - check if product material includes selected)
    if (selectedMaterials.length > 0) {
      result = result.filter(p =>
        selectedMaterials.some(m => p.material.includes(m))
      );
    }

    // Sort
    switch (sortOption) {
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
  }, [selectedCategories, priceRange, selectedMaterials, sortOption, searchQuery]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSortOption('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    priceRange[0] > 0 || priceRange[1] < 120 || 
    selectedMaterials.length > 0 || searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-2">Discover</p>
        <h1 className="heading-serif text-4xl md:text-5xl">The Collection</h1>
        {searchQuery && (
          <p className="mt-2 text-[#6B6560]">Results for "{searchQuery}"</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <span className="text-xs tracking-[0.1em] uppercase font-medium">Filters</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#8C6F4E] hover:underline"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden text-sm flex items-center gap-1"
              >
                {showFilters ? 'Hide' : 'Show'} <ChevronDown size={14} className={showFilters ? 'rotate-180' : ''} />
              </button>
            </div>

            <div className={`space-y-8 ${showFilters || 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <label key={category} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span>${priceRange[0]}</span>
                    <span className="text-[#D9D2C7]">—</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <div className="flex gap-2">
                    {[30, 60, 90, 120].map((price) => (
                      <button
                        key={price}
                        onClick={() => setPriceRange([0, price])}
                        className="text-xs px-2 py-1 border border-[#D9D2C7] hover:border-[#B89778] transition-colors"
                      >
                        Up to ${price}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-1">
                  {availableMaterials.map((material) => (
                    <label key={material} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                      />
                      <span>{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort & Count */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E2D9]">
            <p className="text-sm text-[#6B6560]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-[0.1em] uppercase text-[#6B6560] hidden sm:inline">Sort</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg mb-2">No products found</p>
              <p className="text-sm text-[#6B6560] mb-6">Try adjusting your filters</p>
              <button onClick={clearFilters} className="btn btn-outline">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
