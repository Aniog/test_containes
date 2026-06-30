import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileFilters, setMobileFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
  }, [searchParams]);

  let filtered = [...products];

  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }
  if (selectedPrice) {
    filtered = filtered.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max);
  }
  if (selectedMaterial) {
    filtered = filtered.filter((p) => p.material === selectedMaterial);
  }

  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    default:
      break;
  }

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSelectedMaterial('');
  };

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial;

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-medium text-stone-800 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm transition-colors ${
              !selectedCategory ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-medium text-stone-800 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
              className={`block text-sm transition-colors ${
                selectedPrice?.label === range.label ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-super-wide uppercase font-medium text-stone-800 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm transition-colors ${
              !selectedMaterial ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm transition-colors ${
              selectedMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-stone-600 hover:text-stone-800'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wide uppercase text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <div className="bg-cream pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            id="shop-title"
            className="font-serif text-3xl md:text-4xl tracking-wide text-stone-800"
          >
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wide uppercase text-stone-600"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs text-stone-500">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs text-stone-500 hidden md:inline">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-stone-800 bg-transparent border border-stone-200 px-3 py-1.5 focus:outline-none focus:border-gold"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-super-wide uppercase text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                      <img
                        data-strk-img-id={`shop-${product.id}-i9`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] [shop-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      <img
                        data-strk-img-id={`shop-${product.id}-j10`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] worn model gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-stone-900/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${
                          hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                          className="flex items-center gap-2 text-white text-xs tracking-super-wide uppercase font-medium"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3
                      id={`shop-${product.id}-name`}
                      className="font-serif text-sm tracking-ultra-wide uppercase text-stone-800"
                    >
                      {product.name}
                    </h3>
                    <p id={`shop-${product.id}-desc`} className="text-xs text-stone-500 mt-0.5">
                      {product.description}
                    </p>
                    <p className="text-sm font-medium text-stone-800 mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFilters(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-warm-white z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-super-wide uppercase font-medium text-stone-800">
                Filters
              </h3>
              <button onClick={() => setMobileFilters(false)} className="text-stone-500" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
