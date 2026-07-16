import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: searchParams.get('price') || 'all',
    sort: searchParams.get('sort') || 'featured',
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'sets', label: 'Gift Sets' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 - $80' },
    { value: 'over80', label: 'Over $80' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  let filtered = [...products];

  if (filters.category !== 'all') {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  if (filters.price === 'under50') filtered = filtered.filter((p) => p.price < 50);
  else if (filters.price === '50to80') filtered = filtered.filter((p) => p.price >= 50 && p.price <= 80);
  else if (filters.price === 'over80') filtered = filtered.filter((p) => p.price > 80);

  if (filters.sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (filters.sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if ( filters.sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const FilterContent = ({ mobile = false }) => (
    <div className={`space-y-8 ${mobile ? '' : ''}`}>
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-dark-forest mb-3 font-sans">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block text-sm w-full text-left py-1.5 transition-colors duration-300 font-sans ${
                filters.category === cat.value
                  ? 'text-warm-gold font-medium'
                  : 'text-taupe hover:text-dark-forest'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-dark-forest mb-3 font-sans">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block text-sm w-full text-left py-1.5 transition-colors duration-300 font-sans ${
                filters.price === range.value
                  ? 'text-warm-gold font-medium'
                  : 'text-taupe hover:text-dark-forest'
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
    <main className="min-h-screen bg-cream pt-24 md:pt-28 pb-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <p className="text-taupe text-xs tracking-[0.25em] uppercase font-sans mb-1">Our Collection</p>
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-3xl md:text-4xl text-dark-forest">
              Shop All
            </h1>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-1.5 text-xs text-taupe hover:text-dark-forest transition-colors tracking-wider uppercase font-sans"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>
          <div className="w-12 h-[1px] bg-warm-gold mt-3" />
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort & count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-taupe font-sans">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs text-taupe font-sans">Sort:</label>
                <select
                  value={filters.sort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="text-xs bg-transparent border border-warm-beige rounded-sm px-3 py-1.5 text-dark-forest focus:outline-none focus:border-warm-gold font-sans"
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
                <p className="text-taupe text-lg font-serif">No products found</p>
                <button
                  onClick={() => setFilters({ category: 'all', price: 'all', sort: 'featured' })}
                  className="text-warm-gold text-sm mt-2 underline underline-offset-2 font-sans"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-cream p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-widest uppercase text-dark-forest font-sans">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-taupe hover:text-dark-forest"
              >
                <X size={18} />
              </button>
            </div>
            <FilterContent mobile />
          </div>
        </div>
      )}
    </main>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border border-warm-beige/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-warm-beige/30 relative overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`${product.description} gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`shop-${product.id}-hover`}
            data-strk-img={`${product.description} gold jewelry detail view`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Link>

      <div className="p-3 md:p-4">
        <div className="flex items-center gap-1 mb-1">
          <Star size={12} className="text-muted-gold fill-muted-gold" />
          <span className="text-[10px] text-taupe">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs tracking-[0.2em] uppercase text-dark-forest leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-dark-forest mt-1">${product.price}</p>
      </div>

      <button
        onClick={() => onAddToCart(product, 'gold', 1)}
        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-gold hover:text-white"
      >
        <ShoppingBag size={14} />
      </button>
    </div>
  );
}