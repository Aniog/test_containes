import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/ProductCard';
import { formatPrice } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedMaterial] = useState('all'); // Only gold in seed data
  const [sortBy, setSortBy] = useState('featured');

  // Search query from URL
  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    const priceRange = priceRanges.find((r) => r.value === selectedPriceRange);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price <= priceRange.max
      );
    }

    // Material filter (placeholder for future)
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
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
        // featured: keep original order
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, selectedPriceRange, selectedMaterial, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h1 className="heading-serif text-4xl mb-2">Shop All</h1>
            <p className="text-text-muted text-sm">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
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
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.1em] font-semibold">Filters</span>
                {(selectedCategories.length > 0 || selectedPriceRange !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gold hover:text-gold-dark"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value)}
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <div className="filter-label">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.value}
                      onChange={() => setSelectedPriceRange(range.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* Material (static for demo) */}
              <div>
                <div className="filter-label">Material</div>
                <div className="text-sm text-text-muted py-1">18K Gold Plated</div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-text-muted mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-gold hover:text-gold-dark text-sm uppercase tracking-widest">
                  Clear Filters
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
