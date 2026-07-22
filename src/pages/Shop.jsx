import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, Star, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange);
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    switch (activeSort) {
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

    return filtered;
  }, [activeCategory, activePriceRange, activeSort]);

  const hasActiveFilters = activeCategory || activePriceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[#1A1A1A] font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors ${
              !activeCategory ? 'text-[#C8A45C] font-medium' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-[#C8A45C] font-medium'
                  : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[#1A1A1A] font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setFilter(
                  'price',
                  activePriceRange === range.label ? '' : range.label
                )
              }
              className={`block text-sm transition-colors ${
                activePriceRange === range.label
                  ? 'text-[#C8A45C] font-medium'
                  : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-2">
                Our Collection
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light">
                {activeCategory
                  ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
                  : 'All Jewelry'}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile filter toggle */}
              <button
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#6B6B6B] border border-[#E8E2D8] px-4 py-2"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="appearance-none text-xs tracking-[0.15em] uppercase text-[#6B6B6B] border border-[#E8E2D8] px-4 py-2 pr-8 bg-transparent cursor-pointer hover:border-[#C8A45C] transition-colors outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6B6B6B] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-50 md:hidden ${
              mobileFiltersOpen ? '' : 'pointer-events-none'
            }`}
          >
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div
              className={`absolute top-0 left-0 h-full w-72 bg-white p-6 shadow-2xl transition-transform duration-300 ${
                mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs tracking-[0.15em] uppercase font-medium">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-[#6B6B6B]">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs text-[#C8A45C] hover:underline tracking-wide"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B6B6B]">No products found matching your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-sm text-[#C8A45C] hover:underline tracking-wide"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#F5F0EB] mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-white/90 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 text-[#1A1A1A] font-medium">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A] text-white py-2.5 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A1A1A]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-[#C8A45C] text-[#C8A45C]" />
                      <span className="text-xs text-[#6B6B6B]">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium mt-1 text-[#1A1A1A]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}