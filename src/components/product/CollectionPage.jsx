import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Rating } from '@/components/ui/Rating';
import { products } from '@/data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 'gold', 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="product-card bg-white">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-warmStone/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card-img-primary w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt=""
              className="product-card-img-secondary w-full h-full object-cover"
            />
          )}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-charcoal text-ivory font-sans text-[10px] font-semibold uppercase tracking-extra-wide px-2.5 py-1">
              {product.badge}
            </span>
          )}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-9 h-9 bg-ivory rounded-full flex items-center justify-center
                       shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 hover:bg-gold hover:text-charcoal text-charcoal"
            aria-label="Quick add to bag"
          >
            <ShoppingBag size={15} />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="product-name text-[11px] text-charcoal leading-snug mb-1">
            {product.name}
          </h3>
          <Rating value={product.rating} count={product.reviews} size={11} />
          <p className="mt-2 font-serif text-base text-charcoal">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

const CATEGORIES = [
  { value: 'all', label: 'All Pieces' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-100', label: '$75 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function filterProducts(list, { category, priceRange, minRating }) {
  return list.filter((p) => {
    if (category !== 'all' && p.category !== category) return false;
    if (priceRange === 'under-50' && p.price >= 50) return false;
    if (priceRange === '50-75' && (p.price < 50 || p.price > 75)) return false;
    if (priceRange === '75-100' && (p.price < 75 || p.price > 100)) return false;
    if (priceRange === 'over-100' && p.price <= 100) return false;
    if (minRating && p.rating < minRating) return false;
    return true;
  });
}

function sortProducts(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
    default: return sorted;
  }
}

export function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const category = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';
  const minRating = searchParams.get('rating') ? Number(searchParams.get('rating')) : null;
  const sort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    const filteredList = filterProducts(products, { category, priceRange, minRating });
    return sortProducts(filteredList, sort);
  }, [category, priceRange, minRating, sort]);

  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value === 'all' || value === null || value === '') {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      return next;
    });
  };

  const activeFilters = [
    category !== 'all' && { key: 'category', value: category, label: CATEGORIES.find((c) => c.value === category)?.label },
    priceRange !== 'all' && { key: 'price', value: priceRange, label: PRICE_RANGES.find((p) => p.value === priceRange)?.label },
    minRating && { key: 'rating', value: minRating, label: `${minRating}+ Stars` },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="pt-28 pb-8 border-b border-warmGray-200">
        <div className="section-container">
          <p className="font-sans text-xs text-center text-warmGray-500 uppercase tracking-extra-wide mb-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl font-light text-charcoal text-center">
            {category === 'all' ? 'The Collection' : CATEGORIES.find((c) => c.value === category)?.label}
          </h1>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat.value}>
                      <button
                        type="button"
                        onClick={() => updateParam('category', cat.value)}
                        className={`font-sans text-sm w-full text-left py-1 transition-colors duration-200
                          ${category === cat.value ? 'text-charcoal font-medium' : 'text-warmGray-500 hover:text-charcoal'}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((p) => (
                    <li key={p.value}>
                      <button
                        type="button"
                        onClick={() => updateParam('price', p.value)}
                        className={`font-sans text-sm w-full text-left py-1 transition-colors duration-200
                          ${priceRange === p.value ? 'text-charcoal font-medium' : 'text-warmGray-500 hover:text-charcoal'}`}
                      >
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline" />

              {/* Rating */}
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-4">
                  Rating
                </h3>
                <ul className="space-y-2">
                  {[4, 3].map((r) => (
                    <li key={r}>
                      <button
                        type="button"
                        onClick={() => updateParam('rating', minRating === r ? null : r)}
                        className={`font-sans text-sm w-full text-left py-1 transition-colors duration-200 flex items-center gap-1.5
                          ${minRating === r ? 'text-charcoal font-medium' : 'text-warmGray-500 hover:text-charcoal'}`}
                      >
                        {'★'.repeat(r)}{'☆'.repeat(5 - r)} & up
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs text-charcoal"
              >
                <SlidersHorizontal size={16} />
                Filter
              </button>

              {/* Active filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {activeFilters.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => updateParam(f.key, 'all')}
                      className="flex items-center gap-1.5 px-3 py-1 bg-warmGray-100 rounded-full
                                 font-sans text-xs text-charcoal hover:bg-warmGray-200 transition-colors"
                    >
                      {f.label}
                      <X size={12} />
                    </button>
                  ))}
                </div>
              )}

              <div className="ml-auto flex items-center gap-3">
                <span className="font-sans text-xs text-warmGray-500 hidden sm:block">
                  Sort:
                </span>
                <select
                  value={sort}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="font-sans text-xs text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-warmGray-500 mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchParams({})}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-richBlack/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg text-charcoal">Filter</h2>
              <button type="button" onClick={() => setSidebarOpen(false)}>
                <X size={20} className="text-charcoal" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-3">Category</h3>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => { updateParam('category', cat.value); setSidebarOpen(false); }}
                    className={`block font-sans text-sm py-1.5 w-full text-left ${category === cat.value ? 'text-charcoal font-medium' : 'text-warmGray-500'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="hairline" />
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-3">Price</h3>
                {PRICE_RANGES.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => { updateParam('price', p.value); setSidebarOpen(false); }}
                    className={`block font-sans text-sm py-1.5 w-full text-left ${priceRange === p.value ? 'text-charcoal font-medium' : 'text-warmGray-500'}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
