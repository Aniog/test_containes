import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/lib/cart';

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterMaterial, setFilterMaterial] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  let filtered = [...products];

  if (filterCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === filterCategory);
  }
  if (filterPrice !== 'all') {
    filtered = filtered.filter((p) => {
      if (filterPrice === 'under50') return p.price < 50;
      if (filterPrice === '50to75') return p.price >= 50 && p.price <= 75;
      if (filterPrice === 'over75') return p.price > 75;
      return true;
    });
  }
  if (filterMaterial !== 'all') {
    filtered = filtered.filter((p) => p.material === filterMaterial);
  }

  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest text-charcoal uppercase mb-4">
          Category
        </h4>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'sets', label: 'Sets' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={opt.value}
                checked={filterCategory === opt.value}
                onChange={() => setFilterCategory(opt.value)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm font-sans text-warm-gray-500 group-hover:text-charcoal transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest text-charcoal uppercase mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 – $75' },
            { value: 'over75', label: 'Over $75' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                value={opt.value}
                checked={filterPrice === opt.value}
                onChange={() => setFilterPrice(opt.value)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm font-sans text-warm-gray-500 group-hover:text-charcoal transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest text-charcoal uppercase mb-4">
          Material
        </h4>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: 'Gold Tone' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                value={opt.value}
                checked={filterMaterial === opt.value}
                onChange={() => setFilterMaterial(opt.value)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm font-sans text-warm-gray-500 group-hover:text-charcoal transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen" ref={containerRef}>
      {/* Page header */}
      <div className="bg-charcoal py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            Shop
          </h1>
          <p className="text-warm-gray-300 font-sans text-sm mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border-light">
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden flex items-center gap-2 text-sm font-sans text-charcoal tracking-wider uppercase"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <label className="text-xs font-sans text-warm-gray-500 tracking-wider uppercase">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-sans text-charcoal bg-transparent border border-border-medium px-3 py-2 focus:outline-none focus:border-charcoal rounded-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] bg-charcoal/5 overflow-hidden rounded-sm">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-title-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          hoveredId === product.id ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-sans tracking-widest uppercase px-2.5 py-1">
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-3 px-0.5">
                      <h3
                        id={`shop-title-${product.id}`}
                        className="text-xs font-serif font-semibold tracking-widest text-charcoal uppercase"
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-xs text-warm-gray-500 font-sans">{product.rating}</span>
                      </div>
                      <p className="text-sm font-sans font-medium text-charcoal mt-0.5">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        variant: 'Gold',
                        quantity: 1,
                      })
                    }
                    className="absolute bottom-20 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-sans tracking-widest uppercase py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 rounded-none hover:bg-gold hover:text-white"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-warm-gray-500 font-sans">No products match your filters.</p>
                <button
                  onClick={() => {
                    setFilterCategory('all');
                    setFilterPrice('all');
                    setFilterMaterial('all');
                  }}
                  className="mt-4 text-gold hover:text-gold-dark font-sans text-sm tracking-wider uppercase transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <div className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-cream p-6 shadow-xl transition-transform duration-400 ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-serif font-semibold text-charcoal">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-gray-500 hover:text-charcoal">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterSidebar />
        </div>
      </div>
    </main>
  );
}