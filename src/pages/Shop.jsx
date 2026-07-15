import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products, { categories } from '@/data/products';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const [filters, setFilters] = useState({
    category: activeCategory,
    priceRange: null,
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: activeCategory }));
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.priceRange) {
      result = result.filter(
        (p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      );
    }

    switch (sortBy) {
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
  }, [filters, sortBy]);

  const updateCategory = (cat) => {
    const newCat = filters.category === cat ? '' : cat;
    setFilters((prev) => ({ ...prev, category: newCat }));
    if (newCat) {
      setSearchParams({ category: newCat });
    } else {
      setSearchParams({});
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-widest uppercase text-warm-400 mb-4">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => { setFilters((p) => ({ ...p, category: '' })); setSearchParams({}); }}
            className={`block text-sm transition-colors ${!filters.category ? 'text-warm-900 font-medium' : 'text-warm-400 hover:text-warm-900'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateCategory(cat.slug)}
              className={`block text-sm transition-colors ${filters.category === cat.slug ? 'text-warm-900 font-medium' : 'text-warm-400 hover:text-warm-900'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-widest uppercase text-warm-400 mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setFilters((p) => ({
                  ...p,
                  priceRange: p.priceRange?.label === range.label ? null : range,
                }))
              }
              className={`block text-sm transition-colors ${
                filters.priceRange?.label === range.label
                  ? 'text-warm-900 font-medium'
                  : 'text-warm-400 hover:text-warm-900'
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
    <div ref={containerRef} className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-20">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
            Collection
          </p>
          <h1 className="section-title">Shop All</h1>
        </div>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main content */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-warm-900"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {(filters.category || filters.priceRange) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                )}
              </button>
              <span className="text-xs text-warm-400">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs text-warm-900 bg-transparent border border-cream-500 px-3 py-2 focus:outline-none focus:border-warm-900 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-400 text-sm">No products match your criteria.</p>
                <button
                  onClick={() => { setFilters({ category: '', priceRange: null }); setSearchParams({}); }}
                  className="text-xs text-gold underline mt-2 hover:text-gold-600"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-cream-300 overflow-hidden mb-4">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-name-${product.id}] velmora gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                          }}
                          className="btn-primary w-full text-[10px] py-2.5 shadow-lg"
                        >
                          <ShoppingBag className="w-3 h-3 mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                    <p id={`shop-name-${product.id}`} className="product-title text-[11px] md:text-xs mb-1">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${
                            i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-cream-500'
                          }`}
                        />
                      ))}
                      <span className="text-[10px] text-warm-400 ml-1">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-warm-900">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-warm-900/40 z-[60] lg:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-[70] lg:hidden px-6 py-6 rounded-t-2xl shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-warm-400" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary w-full mt-8 text-xs"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </>
      )}
    </div>
  );
}