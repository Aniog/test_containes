import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80 & Above', min: 80, max: 999 },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch } = useCart();
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

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = activeCategory || activePriceRange;

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

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.1em] text-brand-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.1em] text-brand-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', activePriceRange === range.label ? '' : range.label)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activePriceRange === range.label
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.1em] text-brand-warm-gray hover:text-brand-charcoal transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between py-6 border-b border-brand-taupe">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
              {activeCategory
                ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-brand-warm-gray mt-1 font-light">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter trigger */}
            <button
              className="md:hidden flex items-center gap-2 text-sm text-brand-charcoal uppercase tracking-[0.1em]"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-sm text-brand-charcoal bg-transparent border border-brand-taupe px-3 py-2 uppercase tracking-[0.1em] focus:outline-none focus:border-brand-charcoal"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filter drawer */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div
            className={`absolute top-0 left-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm uppercase tracking-[0.1em] font-medium">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex gap-10 pt-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-warm-gray">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-brand-gold mt-2 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[3/4] overflow-hidden bg-brand-gold-light">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <div className="pt-3">
                      <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-charcoal truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                        <span className="text-[11px] text-brand-warm-gray">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
                      <button
                        onClick={() => {
                          dispatch({
                            type: 'ADD_ITEM',
                            payload: {
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.images[0],
                            },
                          });
                        }}
                        className="w-full mt-3 border border-brand-taupe text-sm py-2 uppercase tracking-[0.1em] text-brand-charcoal hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
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