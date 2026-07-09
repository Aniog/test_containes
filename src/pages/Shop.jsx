import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states from URL params
  const categoryParam = searchParams.get('category') || 'All';
  const searchParam = searchParams.get('search') || '';
  const sortParam = searchParams.get('sort') || 'featured';
  const priceParam = searchParams.get('price') || 'all';
  const materialParam = searchParams.get('material') || 'All';

  // Local state for mobile filter toggle
  const [showFilters, setShowFilters] = useState(false);

  // Update URL params helper
  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'All' && value !== 'all' && value !== 'featured') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchParam) {
      const q = searchParam.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (categoryParam !== 'All') {
      result = result.filter((p) => p.category === categoryParam);
    }

    // Price filter
    if (priceParam !== 'all') {
      const range = priceRanges.find((r) => r.label === priceParam);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter (simulated via variant availability)
    if (materialParam !== 'All') {
      // All products have both gold and silver variants, so this is a placeholder
      // In a real app, products would have different material availability
      result = result.filter((p) =>
        p.variants.some((v) => v.label.toLowerCase() === materialParam.toLowerCase())
      );
    }

    // Sort
    switch (sortParam) {
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
        // Featured: keep original order (could be popularity)
        break;
    }

    return result;
  }, [searchParam, categoryParam, priceParam, materialParam, sortParam]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryParam !== 'All' || searchParam || priceParam !== 'all' || materialParam !== 'All' || sortParam !== 'featured';

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <div className="container pt-24 pb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Discover</span>
            <h1 className="mt-1">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortParam}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn btn-outline btn-sm"
            >
              {showFilters ? 'Hide Filters' : 'Filters'}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div>
                  <button
                    onClick={clearFilters}
                    className="text-xs tracking-[0.1em] uppercase text-[#B8976A] hover:underline"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Search (mobile) */}
              <div className="md:hidden">
                <div className="filter-label">Search</div>
                <input
                  type="text"
                  value={searchParam}
                  onChange={(e) => updateParam('search', e.target.value)}
                  placeholder="Search jewelry..."
                  className="input text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateParam('category', cat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        categoryParam === cat ? 'text-[#B8976A] font-medium' : 'text-[#6B635C] hover:text-[#1C1917]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price</div>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() => updateParam('price', 'all')}
                    className={`block w-full text-left py-1 transition-colors ${
                      priceParam === 'all' ? 'text-[#B8976A] font-medium' : 'text-[#6B635C] hover:text-[#1C1917]'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateParam('price', range.label)}
                      className={`block w-full text-left py-1 transition-colors ${
                        priceParam === range.label ? 'text-[#B8976A] font-medium' : 'text-[#6B635C] hover:text-[#1C1917]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-2 text-sm">
                  {['All', 'Gold', 'Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateParam('material', mat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        materialParam === mat ? 'text-[#B8976A] font-medium' : 'text-[#6B635C] hover:text-[#1C1917]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {searchParam && (
              <p className="text-sm text-[#6B635C] mb-4">
                Showing results for "<span className="text-[#1C1917]">{searchParam}</span>"
              </p>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B635C] mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn btn-gold-outline">
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-12 text-center text-xs text-[#9A9085] tracking-[0.1em]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} shown
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;