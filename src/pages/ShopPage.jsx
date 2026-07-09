import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated', 'Sterling Silver', 'Gold Vermeil'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'All'
  );
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => {
        const cat = p.data?.category || p.category;
        return cat === selectedCategory;
      });
    }

    if (selectedMaterial !== 'All') {
      list = list.filter((p) => {
        const mat = p.data?.material || p.material;
        return mat === selectedMaterial;
      });
    }

    list = list.filter((p) => {
      const price = p.data?.price || p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => (a.data?.price || a.price) - (b.data?.price || b.price));
        break;
      case 'price-desc':
        list.sort((a, b) => (b.data?.price || b.price) - (a.data?.price || a.price));
        break;
      case 'rating':
        list.sort((a, b) => (b.data?.rating || b.rating || 0) - (a.data?.rating || a.rating || 0));
        break;
      default:
        break;
    }

    return list;
  }, [products, selectedCategory, selectedMaterial, priceRange, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedMaterial !== 'All' ? 1 : 0) +
    (priceRange[1] !== 150 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 150]);
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/40 mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if (cat === 'All') setSearchParams({});
                else setSearchParams({ category: cat.toLowerCase() });
              }}
              className={`block w-full text-left text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-[var(--charcoal)] font-medium'
                  : 'text-[var(--charcoal)]/50 hover:text-[var(--charcoal)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/40 mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-[var(--charcoal)] font-medium'
                  : 'text-[var(--charcoal)]/50 hover:text-[var(--charcoal)]'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/40 mb-4">
          Max Price: ${priceRange[1]}
        </h4>
        <input
          type="range"
          min="0"
          max="150"
          step="5"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          className="w-full accent-[var(--gold)]"
        />
        <div className="flex justify-between text-xs text-[var(--charcoal)]/40 mt-1">
          <span>$0</span>
          <span>$150</span>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.15em] text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--charcoal)]">Shop All</h1>
          <p className="mt-2 text-sm text-[var(--charcoal)]/50">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--cream-dark)]">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)]/70"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="hidden md:flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)]/70 hover:text-[var(--charcoal)] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            {activeFiltersCount > 0 && (
              <span className="bg-[var(--gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs uppercase tracking-[0.1em] text-[var(--charcoal)]/70 pr-6 py-2 focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--charcoal)]/40" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop filters */}
          {showFilters && (
            <aside className="hidden md:block w-56 flex-shrink-0">
              <FilterContent />
            </aside>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[var(--charcoal)]/40">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id || product.data?.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProductCard product={product.data || product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-[var(--warm-white)] z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl text-[var(--charcoal)]">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-[var(--charcoal)]/60" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
