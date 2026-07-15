import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // URL params
  const urlCategory = searchParams.get('category') || '';
  const urlSearch = searchParams.get('search') || '';

  // Local filter state
  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory ? [urlCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState('featured');

  // Sync URL category to state on mount/param change
  React.useEffect(() => {
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter (from navbar or URL)
    if (urlSearch) {
      const q = urlSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter (simulate Silver availability for demo)
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => {
        // All products are Gold by default; simulate some Silver availability
        if (selectedMaterials.includes('Silver') && selectedMaterials.includes('Gold')) {
          return true;
        }
        if (selectedMaterials.includes('Silver')) {
          // Randomly treat some as available in Silver for demo
          return p.id % 2 === 0;
        }
        if (selectedMaterials.includes('Gold')) {
          return true;
        }
        return true;
      });
    }

    // Price filter
    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) => {
        return selectedPriceRanges.some((rangeLabel) => {
          const range = priceRanges.find((r) => r.label === rangeLabel);
          if (!range) return false;
          return p.price >= range.min && p.price < range.max;
        });
      });
    }

    // Sorting
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
      case 'featured':
      default:
        // Keep original order (bestsellers first)
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sortOption, urlSearch]);

  // Toggle helpers
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

  const togglePriceRange = (rangeLabel) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeLabel)
        ? prev.filter((r) => r !== rangeLabel)
        : [...prev, rangeLabel]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPriceRanges([]);
    setSortOption('featured');
    // Clear URL params too
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedPriceRanges.length > 0 ||
    urlSearch;

  const materials = ['Gold', 'Silver'];

  return (
    <div className="container section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">Discover</div>
          <h1 className="serif text-3xl md:text-4xl">The Collection</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden btn btn-outline btn-sm flex items-center gap-2"
          >
            <Filter size={14} /> Filters
          </button>

          {/* Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>
      </div>

      {/* Active Search Banner */}
      {urlSearch && (
        <div className="mb-6 flex items-center gap-2 text-sm">
          <span className="text-velmora-text-muted">Searching for:</span>
          <span className="font-medium">"{urlSearch}"</span>
          <Link to="/shop" className="text-velmora-gold hover:underline ml-2">Clear</Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`w-full md:w-56 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <div className="uppercase tracking-[2px] text-xs text-velmora-text-muted">Filter</div>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-6">
              <div className="filter-label">Category</div>
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

            {/* Material */}
            <div className="mb-6">
              <div className="filter-label">Material</div>
              {materials.map((mat) => (
                <label key={mat} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="filter-label">Price</div>
              {priceRanges.map((range) => (
                <label key={range.label} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.includes(range.label)}
                    onChange={() => togglePriceRange(range.label)}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>

            {/* Mobile Close */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="md:hidden btn btn-outline btn-sm w-full mt-2"
            >
              Done
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-xs text-velmora-text-muted mb-4 tracking-widest">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'STYLE' : 'STYLES'}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-velmora-text-muted mb-4">No products match your filters.</p>
              <button onClick={clearAllFilters} className="btn btn-outline btn-sm">
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
