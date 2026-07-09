import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const allCategories = ['earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'newest';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeSort]);

  const hasActiveFilters = activeCategory || activePriceRange;

  return (
    <div className="bg-brand-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light">
              {activeCategory
                ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
                : 'All Jewelry'}
            </h1>
            <p className="font-sans text-sm text-brand-taupe mt-1">{filteredProducts.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="font-sans text-xs uppercase tracking-wider text-brand-charcoal bg-transparent border border-brand-cream-dark px-3 py-2 focus:outline-none focus:border-brand-charcoal"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-brand-charcoal border border-brand-cream-dark px-3 py-2"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setFilter('category', '')}
                      className={`font-sans text-sm transition-colors ${
                        !activeCategory ? 'text-brand-charcoal font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {allCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setFilter('category', cat)}
                        className={`font-sans text-sm capitalize transition-colors ${
                          activeCategory === cat ? 'text-brand-charcoal font-medium' : 'text-brand-taupe hover:text-brand-charcoal'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
                        className={`font-sans text-sm transition-colors ${
                          activePriceRange === range.label
                            ? 'text-brand-charcoal font-medium'
                            : 'text-brand-taupe hover:text-brand-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs uppercase tracking-wider text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-warm p-6 overflow-y-auto animate-slide-down">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-sm uppercase tracking-widest">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal mb-3">Category</h4>
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => { setFilter('category', cat === activeCategory ? '' : cat); setMobileFilterOpen(false); }}
                          className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                            activeCategory === cat
                              ? 'bg-brand-charcoal text-white border-brand-charcoal'
                              : 'border-brand-cream-dark text-brand-charcoal hover:border-brand-charcoal'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal mb-3">Price</h4>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => { setFilter('price', activePriceRange === range.label ? '' : range.label); setMobileFilterOpen(false); }}
                          className={`px-4 py-2 font-sans text-xs uppercase tracking-wider border transition-colors ${
                            activePriceRange === range.label
                              ? 'bg-brand-charcoal text-white border-brand-charcoal'
                              : 'border-brand-cream-dark text-brand-charcoal hover:border-brand-charcoal'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="font-sans text-xs uppercase tracking-wider text-brand-gold">
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-taupe mb-4">No pieces match your filters</p>
                <button onClick={clearFilters} className="btn-outline text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="mt-3 px-1">
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="product-name text-brand-charcoal group-hover:text-brand-gold transition-colors leading-relaxed">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                        <span className="font-sans text-xs text-brand-taupe">{product.rating}</span>
                      </div>
                      <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="w-full mt-2 py-2.5 bg-brand-charcoal/90 text-white font-sans text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-charcoal"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}