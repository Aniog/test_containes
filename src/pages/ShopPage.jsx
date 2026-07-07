import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryFilters = ['all', 'earrings', 'necklaces', 'huggies'];
const priceFilters = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 - $80', min: 50, max: 80 },
  { label: 'Over $80', min: 81, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, 'gold', 1);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-white text-xs font-sans font-medium tracking-super-wide uppercase hover:text-brand-gold transition-colors"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
          {product.name}
        </h3>
        <p className="text-xs text-brand-muted font-sans mt-0.5">
          {product.description}
        </p>
        <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    const pf = priceFilters[priceRange];
    result = result.filter((p) => p.price >= pf.min && p.price <= pf.max);

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [category, priceRange, sort]);

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-brand-espresso py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-white/60 font-sans">
            Discover pieces crafted to be treasured
          </p>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans font-semibold tracking-ultra-wide uppercase text-brand-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2 mb-8">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block text-sm font-sans capitalize transition-colors ${
                      category === cat
                        ? 'text-brand-gold font-medium'
                        : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-sans font-semibold tracking-ultra-wide uppercase text-brand-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2 mb-8">
                {priceFilters.map((pf, i) => (
                  <button
                    key={pf.label}
                    onClick={() => setPriceRange(i)}
                    className={`block text-sm font-sans transition-colors ${
                      priceRange === i
                        ? 'text-brand-gold font-medium'
                        : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {pf.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-sans font-semibold tracking-ultra-wide uppercase text-brand-charcoal mb-4">
                Sort By
              </h3>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-brand-cream md:hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
                <h3 className="font-serif text-lg text-brand-charcoal">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X size={20} className="text-brand-charcoal" />
                </button>
              </div>
              <div className="px-6 py-6 space-y-8">
                <div>
                  <h4 className="text-xs font-sans font-semibold tracking-ultra-wide uppercase text-brand-charcoal mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categoryFilters.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setCategory(cat); setMobileFiltersOpen(false); }}
                        className={`block text-sm font-sans capitalize ${category === cat ? 'text-brand-gold font-medium' : 'text-brand-muted'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold tracking-ultra-wide uppercase text-brand-charcoal mb-3">
                    Price
                  </h4>
                  <div className="space-y-2">
                    {priceFilters.map((pf, i) => (
                      <button
                        key={pf.label}
                        onClick={() => { setPriceRange(i); setMobileFiltersOpen(false); }}
                        className={`block text-sm font-sans ${priceRange === i ? 'text-brand-gold font-medium' : 'text-brand-muted'}`}
                      >
                        {pf.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted">No products found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0); }}
                  className="mt-4 text-xs font-sans tracking-super-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
