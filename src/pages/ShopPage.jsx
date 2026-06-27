import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (priceFilter !== 'all') {
      if (priceFilter === 'under50') result = result.filter((p) => p.price < 50);
      else if (priceFilter === '50to75') result = result.filter((p) => p.price >= 50 && p.price <= 75);
      else if (priceFilter === 'over75') result = result.filter((p) => p.price > 75);
    }
    if (materialFilter !== 'all') {
      result = result.filter((p) => p.material.toLowerCase().includes(materialFilter.toLowerCase()));
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [categoryFilter, priceFilter, materialFilter, sort]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all';

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide-premium uppercase mb-2">Shop All</h1>
          <p className="text-velmora-500 text-sm">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Category</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'earrings', label: 'Earrings' },
                    { value: 'necklaces', label: 'Necklaces' },
                    { value: 'huggies', label: 'Huggies' },
                    { value: 'sets', label: 'Gift Sets' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === option.value}
                        onChange={() => updateFilter('category', option.value)}
                        className="accent-charcoal"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceFilter === option.value}
                        onChange={() => updateFilter('price', option.value)}
                        className="accent-charcoal"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={materialFilter === option.value}
                        onChange={() => updateFilter('material', option.value)}
                        className="accent-charcoal"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-xs text-velmora-500 hover:text-charcoal underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-sm"
                >
                  Sort: {sort === 'featured' ? 'Featured' : sort === 'price-asc' ? 'Price: Low' : sort === 'price-desc' ? 'Price: High' : sort === 'rating' ? 'Top Rated' : 'Name'}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-sm py-2 min-w-[160px] z-10">
                    {[
                      { value: 'featured', label: 'Featured' },
                      { value: 'price-asc', label: 'Price: Low to High' },
                      { value: 'price-desc', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Top Rated' },
                      { value: 'name', label: 'Name A-Z' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-velmora-100 ${
                          sort === option.value ? 'text-charcoal font-medium' : 'text-velmora-600'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Filter Panel */}
            {filterOpen && (
              <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setFilterOpen(false)}>
                <div
                  className="absolute left-0 top-0 h-full w-80 max-w-full bg-cream p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-xl">Filters</h2>
                    <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    {/* Category */}
                    <div>
                      <h3 className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Category</h3>
                      <div className="space-y-2">
                        {[
                          { value: 'all', label: 'All' },
                          { value: 'earrings', label: 'Earrings' },
                          { value: 'necklaces', label: 'Necklaces' },
                          { value: 'huggies', label: 'Huggies' },
                          { value: 'sets', label: 'Gift Sets' },
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="category-mobile"
                              checked={categoryFilter === option.value}
                              onChange={() => updateFilter('category', option.value)}
                              className="accent-charcoal"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <h3 className="text-xs tracking-wide-premium uppercase text-velmora-500 mb-3">Price</h3>
                      <div className="space-y-2">
                        {[
                          { value: 'all', label: 'All Prices' },
                          { value: 'under50', label: 'Under $50' },
                          { value: '50to75', label: '$50 - $75' },
                          { value: 'over75', label: 'Over $75' },
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="price-mobile"
                              checked={priceFilter === option.value}
                              onChange={() => updateFilter('price', option.value)}
                              className="accent-charcoal"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button onClick={clearFilters} className="btn-outline flex-1">
                      Clear
                    </button>
                    <button onClick={() => setFilterOpen(false)} className="btn-primary flex-1">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-600 mb-4">No pieces found</p>
                <p className="text-sm text-velmora-500 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-velmora-100 mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] tracking-wide-premium uppercase px-2 py-1">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="product-name text-xs sm:text-sm">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span className="text-xs text-velmora-500">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
