import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // URL params
  const urlCategory = searchParams.get('category') || 'All';
  const urlSearch = searchParams.get('search') || '';

  // Local filter state
  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory !== 'All' ? [urlCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(urlSearch);

  // Price ranges for filter
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 49 },
    { label: '$50 – $75', min: 50, max: 75 },
    { label: 'Over $75', min: 76, max: 120 },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
        // featured: keep original order (bestsellers first-ish)
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

  // Handlers
  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const setPriceFilter = (min, max) => {
    setPriceRange([min, max]);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Sync search from URL on mount
  React.useEffect(() => {
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
    if (urlCategory !== 'All' && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, []);

  return (
    <main className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-1">Browse</p>
            <h1 className="serif text-3xl md:text-4xl tracking-[-0.01em]">The Collection</h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden text-sm tracking-wider border-b border-[#8C6F52] pb-0.5"
            >
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs tracking-wider text-[#6B6058] hidden sm:inline">Sort</span>
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
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Active Filters */}
              {(selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 120) && (
                <div>
                  <button
                    onClick={clearFilters}
                    className="text-xs tracking-wider text-[#8C6F52] hover:underline mb-3"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Category */}
              <div>
                <p className="filter-label">Category</p>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <p className="filter-label">Price</p>
                {priceRanges.map((range, idx) => (
                  <label key={idx} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === range.min && priceRange[1] === range.max}
                      onChange={() => setPriceFilter(range.min, range.max)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 0 && priceRange[1] === 120}
                    onChange={() => setPriceFilter(0, 120)}
                  />
                  <span>All Prices</span>
                </label>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                    <span>{mat} Tone</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {searchQuery && (
              <p className="text-sm text-[#6B6058] mb-4">
                Showing results for "<span className="text-[#2C2522]">{searchQuery}</span>"
              </p>
            )}

            {filteredProducts.length > 0 ? (
              <>
                <p className="text-xs tracking-wider text-[#6B6058] mb-4">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B6058] mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
