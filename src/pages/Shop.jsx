import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Star, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FILTERS = {
  category: [
    { label: 'All', value: '' },
    { label: 'Earrings', value: 'Earrings' },
    { label: 'Necklaces', value: 'Necklaces' },
    { label: 'Huggies', value: 'Huggies' },
  ],
  price: [
    { label: 'All Prices', value: '' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 – $75', value: '50-75' },
    { label: '$75 – $100', value: '75-100' },
    { label: 'Over $100', value: '100-999' },
  ],
};

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

function ProductGridItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const imgIdBase = `shop-${product.id}`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ productId: product.id, variant: product.variants[0], price: product.price, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-charcoal-100 aspect-[3/4] mb-4">
        <div
          data-strk-bg-id={`${imgIdBase}-v1`}
          data-strk-bg={`[${imgIdBase}-name] gold jewelry`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered && product.variants.length > 1 ? 'opacity-0' : 'opacity-100'}`}
        />
        {product.variants.length > 1 && (
          <div
            data-strk-bg-id={`${imgIdBase}-v2`}
            data-strk-bg={`[${imgIdBase}-name] gold jewelry alternate`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-3 text-center text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            added ? 'bg-warm-600 text-white' : 'bg-cream-50/90 backdrop-blur-sm text-charcoal-800 opacity-0 group-hover:opacity-100 hover:bg-charcoal-800 hover:text-cream-50'
          }`}
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
      <p id={`${imgIdBase}-name`} className="font-serif text-sm font-semibold tracking-widest uppercase text-charcoal-900 leading-snug">
        {product.name}
      </p>
      <p className="text-xs text-charcoal-500 mt-0.5">{product.subcategory}</p>
      <div className="flex items-center gap-1 mt-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-warm-500 text-warm-500' : 'text-charcoal-200 fill-charcoal-200'}`} />
        ))}
        <span className="text-[10px] text-charcoal-400 ml-1">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-charcoal-800 mt-1">${product.price}</p>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory || p.subcategory === activeCategory);
    }
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (activeSort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory, activePrice, activeSort]);

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h4 className="font-sans text-[10px] font-semibold tracking-widest2 uppercase text-charcoal-400 mb-4">Category</h4>
        <div className="space-y-2">
          {FILTERS.category.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('category', f.value)}
              className={`block text-sm transition-colors ${activeCategory === f.value ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="font-sans text-[10px] font-semibold tracking-widest2 uppercase text-charcoal-400 mb-4">Price</h4>
        <div className="space-y-2">
          {FILTERS.price.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('price', f.value)}
              className={`block text-sm transition-colors ${activePrice === f.value ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-800'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {(activeCategory || activePrice) && (
        <button
          onClick={() => setSearchParams({})}
          className="text-xs text-warm-600 hover:text-warm-700 underline underline-offset-2"
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div className="min-h-screen pt-28 pb-20" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
            Shop All
          </h1>
          <div className="w-12 h-px bg-warm-400 mx-auto mt-6" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-charcoal-200/60">
          <button
            className="md:hidden flex items-center gap-2 text-sm text-charcoal-700"
            onClick={() => setMobileFilterOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeCategory || activePrice ? `(${[activeCategory, activePrice].filter(Boolean).length})` : ''}
          </button>

          <p className="hidden md:block text-xs text-charcoal-400">
            Showing {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value === 'featured' ? '' : e.target.value)}
              className="appearance-none bg-transparent text-sm text-charcoal-700 pr-8 py-1 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop filter sidebar */}
          <aside className="hidden md:block w-[180px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500">No pieces found.</p>
                <button onClick={() => setSearchParams({})} className="text-sm text-warm-600 hover:text-warm-700 mt-2 underline underline-offset-2">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product, i) => (
                  <ProductGridItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal-950/40 z-[120] md:hidden" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-[280px] bg-cream-50 z-[125] p-6 overflow-y-auto animate-slide-in-right md:hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg font-semibold tracking-wider text-charcoal-900">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-charcoal-600">
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
