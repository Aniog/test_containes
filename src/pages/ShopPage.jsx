import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [sort, setSort] = useState('featured');
  const [filterCategory, setFilterCategory] = useState(categoryParam);
  const [filterMaterial, setFilterMaterial] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem, openDrawer } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];
    if (filterCategory) {
      result = result.filter((p) => p.category === filterCategory);
    }
    if (filterMaterial) {
      result = result.filter((p) => p.material === filterMaterial);
    }
    if (filterPrice === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (filterPrice === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (filterPrice === 'over100') {
      result = result.filter((p) => p.price > 100);
    }

    switch (sort) {
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
  }, [filterCategory, filterMaterial, filterPrice, sort]);

  const clearFilters = () => {
    setFilterCategory('');
    setFilterMaterial('');
    setFilterPrice('');
  };

  const hasFilters = filterCategory || filterMaterial || filterPrice;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-wider uppercase text-velmora-ink mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {[
            { value: '', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterCategory(opt.value)}
              className={`block text-sm transition-colors ${
                filterCategory === opt.value
                  ? 'text-velmora-gold'
                  : 'text-velmora-stone hover:text-velmora-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-wider uppercase text-velmora-ink mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {[
            { value: '', label: 'All' },
            { value: 'gold', label: '18K Gold Plated' },
            { value: 'silver', label: 'Silver' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterMaterial(opt.value)}
              className={`block text-sm transition-colors ${
                filterMaterial === opt.value
                  ? 'text-velmora-gold'
                  : 'text-velmora-stone hover:text-velmora-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-wider uppercase text-velmora-ink mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { value: '', label: 'All' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterPrice(opt.value)}
              className={`block text-sm transition-colors ${
                filterPrice === opt.value
                  ? 'text-velmora-gold'
                  : 'text-velmora-stone hover:text-velmora-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="section-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink">
              Shop All
            </h1>
            <p className="text-sm text-velmora-stone mt-1">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-stone hover:text-velmora-ink"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
              )}
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs bg-transparent border border-velmora-sand/50 px-3 py-2 text-velmora-ink focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-stone hover:text-velmora-ink mb-6 flex items-center gap-1"
                >
                  <X size={12} />
                  Clear all
                </button>
              )}
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block"
                >
                  <div className="aspect-square bg-velmora-sand/20 flex items-center justify-center mb-4 overflow-hidden">
                    <span className="text-velmora-stone/30 text-xs tracking-wider">
                      {product.name.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="product-name text-velmora-ink group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-velmora-gold text-velmora-gold'
                            : 'text-velmora-sand'
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-velmora-gold mt-1">
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-stone text-sm">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-ghost mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div
            className="absolute inset-0 bg-velmora-ink/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-velmora-cream shadow-2xl animate-slide-in-right p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wide">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-velmora-stone"
              >
                <X size={18} />
              </button>
            </div>
            {hasFilters && (
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="text-xs text-velmora-stone hover:text-velmora-ink mb-6 flex items-center gap-1"
              >
                <X size={12} />
                Clear all
              </button>
            )}
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}