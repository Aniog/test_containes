import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const filters = {
  category: [
    { id: 'all', label: 'All' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Gift Sets' },
  ],
  price: [
    { id: 'all', label: 'All Prices' },
    { id: 'under40', label: 'Under $40' },
    { id: '40to60', label: '$40 - $60' },
    { id: '60plus', label: '$60+' },
  ],
  material: [
    { id: 'all', label: 'All Materials' },
    { id: '18k-gold-plated', label: '18K Gold Plated' },
  ],
};

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice === 'under40') {
      result = result.filter((p) => p.price < 40);
    } else if (activePrice === '40to60') {
      result = result.filter((p) => p.price >= 40 && p.price <= 60);
    } else if (activePrice === '60plus') {
      result = result.filter((p) => p.price > 60);
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const clearFilters = () => {
    setActiveCategory('all');
    setActivePrice('all');
    setActiveMaterial('all');
  };

  const activeFilterCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
    activeMaterial !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink mb-3">
            The Collection
          </h1>
          <p className="text-sm text-velmora-brown">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-warm">
          {/* Filter button - mobile */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-ink"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-ink text-velmora-cream text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop filters */}
          <div className="hidden lg:flex items-center gap-6">
            {filters.category.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'text-velmora-ink font-medium'
                    : 'text-velmora-taupe hover:text-velmora-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-ink"
            >
              Sort: {sortOptions.find((s) => s.id === sortBy)?.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  sortOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-velmora-warm z-50 min-w-[200px]">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-xs uppercase tracking-wider transition-colors ${
                        sortBy === option.id
                          ? 'bg-velmora-sand text-velmora-ink font-medium'
                          : 'text-velmora-brown hover:bg-velmora-cream'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar filters */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs uppercase tracking-widest font-medium text-velmora-ink">
                  Filters
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Category
                </p>
                <div className="flex flex-col gap-2">
                  {filters.category.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-left text-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown hover:text-velmora-ink'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Price
                </p>
                <div className="flex flex-col gap-2">
                  {filters.price.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePrice(p.id)}
                      className={`text-left text-sm transition-colors ${
                        activePrice === p.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown hover:text-velmora-ink'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Material
                </p>
                <div className="flex flex-col gap-2">
                  {filters.material.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveMaterial(m.id)}
                      className={`text-left text-sm transition-colors ${
                        activeMaterial === m.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown hover:text-velmora-ink'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-ink mb-2">
                  No products found
                </p>
                <p className="text-sm text-velmora-taupe mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-velmora-gold hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-14">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-velmora-cream shadow-xl flex flex-col animate-slide-up">
            <div className="p-6 border-b border-velmora-warm flex items-center justify-between">
              <h2 className="font-serif text-lg text-velmora-ink">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-velmora-brown"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {/* Category */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Category
                </p>
                <div className="flex flex-col gap-3">
                  {filters.category.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-left text-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Price
                </p>
                <div className="flex flex-col gap-3">
                  {filters.price.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePrice(p.id)}
                      className={`text-left text-sm transition-colors ${
                        activePrice === p.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs uppercase tracking-wider text-velmora-taupe mb-3">
                  Material
                </p>
                <div className="flex flex-col gap-3">
                  {filters.material.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveMaterial(m.id)}
                      className={`text-left text-sm transition-colors ${
                        activeMaterial === m.id
                          ? 'text-velmora-ink font-medium'
                          : 'text-velmora-brown'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-velmora-warm">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full border border-velmora-ink text-velmora-ink py-3 text-xs uppercase tracking-widest font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
