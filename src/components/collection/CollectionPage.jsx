import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products, categories } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory !== 'all') {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory]);

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= (max || Infinity));
  }

  if (selectedMaterial !== 'all') {
    filtered = filtered.filter((p) => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()));
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const activeFilters = [
    selectedCategory !== 'all' && `Category: ${selectedCategory}`,
    priceRange !== 'all' && `Price: $${priceRange}`,
    selectedMaterial !== 'all' && `Material: ${selectedMaterial}`,
  ].filter(Boolean);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedMaterial('all');
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-3xl md:text-4xl mb-2">
            {selectedCategory !== 'all'
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {activeFilters.map((filter, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--velmora-bg-alt)] text-xs"
              >
                {filter}
                <button onClick={clearFilters} className="ml-1 hover:text-[var(--velmora-accent)]">
                  <X size={12} />
                </button>
              </span>
            ))}
            <button onClick={clearFilters} className="text-xs text-[var(--velmora-accent)] underline">
              Clear all
            </button>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--velmora-border)]">
          {/* Mobile filter button */}
          <button
            className="lg:hidden flex items-center gap-2 text-sm"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Sort */}
          <div className="relative ml-auto">
            <button
              className="flex items-center gap-2 text-sm"
              onClick={() => setSortOpen(!sortOpen)}
            >
              Sort: {sortOptions.find((s) => s.value === sort)?.label}
              <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-[var(--velmora-border)] shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--velmora-bg-alt)] transition-colors ${
                      sort === option.value ? 'text-[var(--velmora-accent)]' : ''
                    }`}
                    onClick={() => {
                      setSort(option.value);
                      setSortOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    className={`block text-sm ${selectedCategory === 'all' ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`block text-sm ${selectedCategory === cat.id ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-999', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      className={`block text-sm ${priceRange === option.value ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      onClick={() => setPriceRange(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      className={`block text-sm ${selectedMaterial === option.value ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]'} transition-colors`}
                      onClick={() => setSelectedMaterial(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setFilterOpen(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[var(--velmora-cream)] z-50 overflow-y-auto p-6 lg:hidden">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="serif-heading text-xl">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Category</h3>
                    <div className="space-y-3">
                      <button
                        className={`block text-sm ${selectedCategory === 'all' ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)]'}`}
                        onClick={() => setSelectedCategory('all')}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          className={`block text-sm ${selectedCategory === cat.id ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)]'}`}
                          onClick={() => setSelectedCategory(cat.id)}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase mb-4">Price</h3>
                    <div className="space-y-3">
                      {[
                        { value: 'all', label: 'All Prices' },
                        { value: '0-50', label: 'Under $50' },
                        { value: '50-100', label: '$50 - $100' },
                        { value: '100-999', label: 'Over $100' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          className={`block text-sm ${priceRange === option.value ? 'text-[var(--velmora-accent)] font-medium' : 'text-[var(--velmora-text-muted)]'}`}
                          onClick={() => setPriceRange(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="btn-accent w-full mt-8" onClick={() => setFilterOpen(false)}>
                  Show {filtered.length} Results
                </button>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-[var(--velmora-text-muted)] mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-[var(--velmora-text-light)] mb-6">
                  Try adjusting your filters
                </p>
                <button className="btn-outline" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
