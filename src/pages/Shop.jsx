import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-espresso/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-brand-gold" />
            <span className="font-sans text-xs tracking-super-wide uppercase text-brand-ivory">
              Add to Cart
            </span>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="font-sans text-sm text-brand-muted mt-1">${product.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
        className="md:hidden mt-2 w-full border border-brand-gold text-brand-gold py-2 font-sans text-xs tracking-super-wide uppercase hover:bg-brand-gold hover:text-brand-ivory transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategory, selectedPrice, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sort]);

  const handleAddToCart = (product) => {
    addItem(product, product.tone[0], 1);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
  };

  const hasFilters = selectedCategory || selectedPrice !== null;

  const FilterContent = () => (
    <>
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-super-wide uppercase text-brand-charcoal font-semibold mb-3">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block font-sans text-sm transition-colors ${
              !selectedCategory ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`block font-sans text-sm transition-colors ${
                selectedCategory === cat.slug ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-8">
        <h3 className="font-sans text-xs tracking-super-wide uppercase text-brand-charcoal font-semibold mb-3">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block font-sans text-sm transition-colors ${
              selectedPrice === null ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(i)}
              className={`block font-sans text-sm transition-colors ${
                selectedPrice === i ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mt-8">
        <h3 className="font-sans text-xs tracking-super-wide uppercase text-brand-charcoal font-semibold mb-3">
          Material
        </h3>
        <div className="space-y-2">
          <span className="block font-sans text-sm text-brand-muted">18K Gold Plated</span>
          <span className="block font-sans text-sm text-brand-muted">Sterling Silver Base</span>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="mt-8 font-sans text-xs tracking-extra-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            The Collection
          </h1>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-extra-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="font-sans text-xs text-brand-muted">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-xs text-brand-charcoal bg-transparent border border-brand-sand px-2 py-1.5 focus:outline-none focus:border-brand-gold"
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
                <p className="font-serif text-lg text-brand-muted mb-4">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-super-wide uppercase text-brand-gold hover:text-brand-gold-dark underline transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-brand-charcoal/40 z-50" onClick={() => setMobileFilters(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-ivory z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-extra-wide uppercase text-brand-charcoal">Filters</h2>
              <button onClick={() => setMobileFilters(false)} className="p-1 text-brand-muted hover:text-brand-charcoal">
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
