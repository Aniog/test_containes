import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const { category } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [filters, setFilters] = useState({ category: category || '', price: '', material: '' });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setFilters((f) => ({ ...f, category: category || '' }));
  }, [category]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, sort, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((f) => ({ ...f, [key]: f[key] === value ? '' : value }));
  };

  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  if (filters.price) {
    const [min, max] = filters.price.split('-').map(Number);
    filtered = filtered.filter((p) => {
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min;
    });
  }

  if (filters.material) {
    filtered = filtered.filter((p) => p.material === filters.material);
  }

  // Sort
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

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants[0]?.value || 'gold';
    addItem({ id: product.id, name: product.name, price: product.price, variant, quantity: 1 });
  };

  return (
    <main ref={containerRef} className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="section-heading">
              {filters.category
                ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
                : 'All Jewelry'}
            </h1>
            <p className="text-deep-500 text-sm mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-1.5 text-xs tracking-wide text-deep-600"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              FILTERS
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-wide bg-transparent border-b border-deep-300 py-1.5 pl-1 pr-6 text-deep-600 focus:border-deep-700 outline-none appearance-none cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={handleFilterChange} />
          </aside>

          {/* Mobile filter overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-deep-950/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-72 bg-deep-50 shadow-2xl p-6 animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg tracking-wider">FILTERS</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar filters={filters} onChange={handleFilterChange} />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="text-deep-400 text-sm text-center py-20">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="group"
                  >
                    <div className="aspect-[3/4] bg-cream-100 rounded-sm overflow-hidden mb-3 relative">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-name-${product.id}] fine gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 mr-2" />
                        ADD TO BAG
                      </button>
                    </div>
                    <span className="product-name text-deep-900" id={`shop-name-${product.id}`}>
                      {product.name}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="price-text">${product.price}</span>
                      <span className="text-deep-300 text-xs">·</span>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                        <span className="text-xs text-deep-500">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {product.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] tracking-wide text-deep-500 bg-deep-100 px-2 py-0.5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
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

function FilterSidebar({ filters, onChange }) {
  return (
    <div className="space-y-7">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest text-deep-500 mb-3">CATEGORY</h4>
        <div className="space-y-2">
          {['earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.category === cat}
                onChange={() => onChange('category', cat)}
                className="w-3.5 h-3.5 rounded-none border-deep-300 text-gold-600 focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-sm text-deep-600 group-hover:text-deep-800 transition-colors capitalize">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest text-deep-500 mb-3">PRICE</h4>
        <div className="space-y-2">
          {[
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 – $100' },
            { value: '100-200', label: '$100 – $200' },
          ].map((range) => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.price === range.value}
                onChange={() => onChange('price', range.value)}
                className="w-3.5 h-3.5 rounded-none border-deep-300 text-gold-600 focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-sm text-deep-600 group-hover:text-deep-800 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest text-deep-500 mb-3">MATERIAL</h4>
        <div className="space-y-2">
          {[
            { value: 'gold', label: '18K Gold Plated' },
            { value: 'silver', label: 'Silver Tone' },
          ].map((mat) => (
            <label key={mat.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.material === mat.value}
                onChange={() => onChange('material', mat.value)}
                className="w-3.5 h-3.5 rounded-none border-deep-300 text-gold-600 focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-sm text-deep-600 group-hover:text-deep-800 transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      {(filters.category || filters.price || filters.material) && (
        <button
          onClick={() => {
            onChange('category', filters.category);
            onChange('price', filters.price);
            onChange('material', filters.material);
          }}
          className="text-xs text-gold-600 hover:text-gold-700 tracking-wide transition-colors underline underline-offset-2"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
