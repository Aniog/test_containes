import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const allCategories = ['All', 'Earrings', 'Necklaces', 'Sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  let filtered = [...products];

  if (selectedCategory !== 'All') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (selectedPrice) {
    filtered = filtered.filter(
      (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
    );
  }

  switch (sortBy) {
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

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPrice(null);
  };

  const hasFilters = selectedCategory !== 'All' || selectedPrice !== null;

  const FiltersContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-ink-500 font-sans mb-3">Category</h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left text-sm py-1.5 font-sans transition-colors ${
                selectedCategory === cat
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-ink-500 font-sans mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setSelectedPrice(
                  selectedPrice?.label === range.label ? null : range
                )
              }
              className={`block w-full text-left text-sm py-1.5 font-sans transition-colors ${
                selectedPrice?.label === range.label
                  ? 'text-ink-900 font-medium'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-cream-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-ink-900 font-light">Shop All</h1>
          <p className="mt-2 text-sm text-ink-500 font-sans">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersContent />
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold-600 hover:text-gold-700 tracking-wider uppercase font-sans transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort + Mobile filter */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-ink-600 font-sans"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                )}
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-ink-500 font-sans">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm text-ink-900 bg-transparent border border-ink-300 px-3 py-1.5 font-sans focus:outline-none focus:border-ink-900"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-ink-500">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold-600 hover:text-gold-700 tracking-wider uppercase font-sans"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-2 py-1 font-sans">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xs tracking-widest text-ink-900 uppercase">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span className="text-[11px] text-ink-500 font-sans">
                        {product.rating}
                      </span>
                    </div>
                    <p className="font-serif text-gold-600 text-sm mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-cream-50 p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm tracking-widest uppercase font-sans text-ink-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-ink-500 hover:text-ink-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersContent />
            {hasFilters && (
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="text-xs text-gold-600 hover:text-gold-700 tracking-wider uppercase font-sans transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}