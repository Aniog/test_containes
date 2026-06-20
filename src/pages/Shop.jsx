import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Get unique materials from products
  const materials = ['18K Gold Plated', 'Crystal'];

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

    // Material filter (simplified - check if product material includes selected)
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.material.includes(m))
      );
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
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy, searchQuery]);

  const toggleFilter = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter((v) => v !== value));
    } else {
      setState([...state, value]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedMaterials([]);
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedPriceRanges.length > 0 ||
    selectedMaterials.length > 0 ||
    searchQuery;

  return (
    <div className="pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <span className="caption">Discover</span>
          <h1 className="mt-1">The Collection</h1>
          <p className="body-text mt-2 max-w-md">
            Demi-fine jewelry crafted from 18K gold-plated brass. Timeless pieces for everyday elegance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="caption">Filter</span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs uppercase tracking-widest text-velmora-gold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input text-sm"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() =>
                        toggleFilter(cat, setSelectedCategories, selectedCategories)
                      }
                    />
                    <span>{cat}</span>
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
                      onChange={() =>
                        toggleFilter(range.label, setSelectedPriceRanges, selectedPriceRanges)
                      }
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() =>
                        toggleFilter(mat, setSelectedMaterials, selectedMaterials)
                      }
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border-subtle">
              <span className="text-sm text-velmora-text-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No results found</h3>
                <p>Try adjusting your filters or search terms.</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;