import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, materials, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

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

    // Material filter (simulated - all products are gold by default)
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    if (selectedPriceRange) {
      result = result.filter(p => 
        p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
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
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedPriceRange, sortOption, searchQuery]);

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

  const selectPriceRange = (range) => {
    setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPriceRange(null);
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || selectedPriceRange || searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10">
        <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-1">DISCOVER</p>
        <h1 className="serif text-4xl">The Collection</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.1em] uppercase">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input text-sm py-2.5"
              />
            </div>

            {/* Category */}
            <div className="mb-8">
              <p className="filter-label">Category</p>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-velmora-gold"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="filter-label">Price</p>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange?.label === range.label}
                      onChange={() => selectPriceRange(range)}
                      className="accent-velmora-gold"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <p className="filter-label">Material</p>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-velmora-gold"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort + Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <p className="text-sm text-velmora-text-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
            
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="input text-sm py-2 pr-10 appearance-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-text-muted" />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-velmora-text-muted mb-4">No products match your filters.</p>
              <button onClick={clearFilters} className="btn btn-gold-outline text-sm">
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