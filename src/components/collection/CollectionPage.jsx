import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { formatPrice } from '@/lib/utils';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, 'gold');
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  // Filter products
  let filtered = products.filter((p) => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (materialFilter !== 'all' && p.material !== materialFilter) return false;
    if (priceFilter === 'under50' && p.price >= 50) return false;
    if (priceFilter === '50to100' && (p.price < 50 || p.price > 100)) return false;
    if (priceFilter === 'over100' && p.price <= 100) return false;
    return true;
  });

  // Sort
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: 'var(--velmora-text)' }}>
          Category
        </h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Jewelry' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === opt.value}
                onChange={() => setSearchParams((prev) => { prev.set('category', opt.value); return prev; })}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm group-hover:opacity-60 transition-opacity" style={{ color: categoryFilter === opt.value ? 'var(--velmora-text)' : 'var(--velmora-text-muted)' }}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: 'var(--velmora-text)' }}>
          Price
        </h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceFilter === opt.value}
                onChange={() => setSearchParams((prev) => { prev.set('price', opt.value); return prev; })}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm group-hover:opacity-60 transition-opacity" style={{ color: priceFilter === opt.value ? 'var(--velmora-text)' : 'var(--velmora-text-muted)' }}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: 'var(--velmora-text)' }}>
          Material
        </h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: 'Gold Plated' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={materialFilter === opt.value}
                onChange={() => setSearchParams((prev) => { prev.set('material', opt.value); return prev; })}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="text-sm group-hover:opacity-60 transition-opacity" style={{ color: materialFilter === opt.value ? 'var(--velmora-text)' : 'var(--velmora-text-muted)' }}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      <button
        onClick={() => setSearchParams({})}
        className="text-xs underline hover:opacity-60 transition-opacity"
        style={{ color: 'var(--velmora-text-muted)' }}
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen" style={{ backgroundColor: 'var(--velmora-bg)' }}>
      {/* Page header */}
      <div className="velmora-container mx-auto px-4 py-8 md:py-12">
        <h1 className="velmora-heading text-3xl md:text-4xl lg:text-5xl text-center mb-4" style={{ color: 'var(--velmora-text)' }}>
          {categoryFilter === 'all' ? 'All Jewelry' : categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
        </h1>
        <p className="text-center text-sm mb-8" style={{ color: 'var(--velmora-text-muted)' }}>
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Mobile filter button + sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--velmora-text)' }}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none text-sm pr-8 py-2 bg-transparent border-none outline-none cursor-pointer"
              style={{ color: 'var(--velmora-text)' }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name A-Z</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--velmora-text-muted)' }} />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1" ref={containerRef}>
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none text-sm pr-8 py-2 bg-transparent border-none outline-none cursor-pointer"
                  style={{ color: 'var(--velmora-text)' }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--velmora-text-muted)' }} />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="velmora-heading text-xl mb-2" style={{ color: 'var(--velmora-text-muted)' }}>
                  No pieces found
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--velmora-text-light)' }}>
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="velmora-btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <a href={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[${product.id}-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span
                            className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1"
                            style={{ backgroundColor: 'var(--velmora-dark)', color: '#fff' }}
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </a>
                    <a href={`/product/${product.id}`} className="block">
                      <h3
                        id={`${product.id}-title`}
                        className="velmora-product-name text-xs md:text-sm mb-1.5"
                        style={{ color: 'var(--velmora-text)' }}
                      >
                        {product.name}
                      </h3>
                      <StarRating rating={product.rating} />
                      <p className="text-sm font-medium mt-1.5" style={{ color: 'var(--velmora-text)' }}>
                        {formatPrice(product.price)}
                      </p>
                    </a>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full mt-3 py-2.5 text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                        addedId === product.id ? 'scale-95' : 'hover:opacity-80'
                      }`}
                      style={{
                        backgroundColor: addedId === product.id ? 'var(--velmora-accent)' : 'var(--velmora-dark)',
                        color: '#fff',
                      }}
                    >
                      {addedId === product.id ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div
            className="absolute left-0 top-0 bottom-0 w-80 max-w-full overflow-y-auto p-6"
            style={{ backgroundColor: 'var(--velmora-surface)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="velmora-heading text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" style={{ color: 'var(--velmora-text)' }} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
