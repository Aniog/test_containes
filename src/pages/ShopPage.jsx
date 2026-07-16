import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={10} strokeWidth={1}
          style={i <= Math.round(rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: '#E8E0D0', color: '#E8E0D0' }} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-espresso text-cream font-sans text-[9px] uppercase tracking-widest px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-espresso font-sans text-[9px] uppercase tracking-widest px-2 py-1">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={e => { e.preventDefault(); addItem(product, product.variants[0]); }}
            className="w-full bg-espresso text-cream font-sans text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-espresso leading-tight">
              {product.name}
            </p>
            <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-taupe mt-1 line-clamp-1">
              {product.description}
            </p>
          </div>
          <p className="font-sans text-sm font-medium text-espresso flex-shrink-0">${product.price}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-xs text-taupe">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || '';
  const priceParam = searchParams.get('price') || '';
  const sortParam = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter(p => !categoryParam || p.category === categoryParam)
    .filter(p => {
      if (!priceParam) return true;
      const [min, max] = priceParam.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortParam === 'price-asc') return a.price - b.price;
      if (sortParam === 'price-desc') return b.price - a.price;
      if (sortParam === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceParam, sortParam]);

  const activeFilters = [
    categoryParam && categoryOptions.find(c => c.value === categoryParam)?.label,
    priceParam && priceRanges.find(r => r.value === priceParam)?.label,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <CartDrawer />

      <main className="pt-16 md:pt-20">
        {/* Page header */}
        <div className="bg-parchment border-b border-linen py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
              {categoryParam ? categoryOptions.find(c => c.value === categoryParam)?.label : 'All Jewelry'}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-espresso">
              {categoryParam ? categoryOptions.find(c => c.value === categoryParam)?.label : 'The Collection'}
            </h1>
            <p className="font-sans text-sm text-taupe mt-3">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-linen">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-espresso border border-linen px-4 py-2.5 hover:border-espresso transition-colors"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                Filters
              </button>

              {/* Desktop filters */}
              <div className="hidden md:flex items-center gap-3">
                {/* Category */}
                <div className="relative">
                  <select
                    value={categoryParam}
                    onChange={e => setFilter('category', e.target.value)}
                    className="appearance-none bg-transparent border border-linen font-sans text-xs uppercase tracking-widest text-espresso px-4 py-2.5 pr-8 hover:border-espresso transition-colors cursor-pointer focus:outline-none"
                  >
                    {categoryOptions.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={11} className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
                </div>

                {/* Price */}
                <div className="relative">
                  <select
                    value={priceParam}
                    onChange={e => setFilter('price', e.target.value)}
                    className="appearance-none bg-transparent border border-linen font-sans text-xs uppercase tracking-widest text-espresso px-4 py-2.5 pr-8 hover:border-espresso transition-colors cursor-pointer focus:outline-none"
                  >
                    {priceRanges.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={11} className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
                </div>
              </div>

              {/* Active filter chips */}
              {activeFilters.map(f => (
                <span key={f} className="flex items-center gap-1.5 bg-espresso text-cream font-sans text-xs px-3 py-1.5">
                  {f}
                  <button
                    onClick={() => {
                      if (categoryOptions.find(c => c.label === f)) setFilter('category', '');
                      if (priceRanges.find(r => r.label === f)) setFilter('price', '');
                    }}
                    className="hover:text-gold transition-colors"
                  >
                    <X size={10} strokeWidth={2} />
                  </button>
                </span>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortParam}
                onChange={e => setFilter('sort', e.target.value)}
                className="appearance-none bg-transparent border border-linen font-sans text-xs uppercase tracking-widest text-espresso px-4 py-2.5 pr-8 hover:border-espresso transition-colors cursor-pointer focus:outline-none"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={11} className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden mb-6 p-5 bg-parchment border border-linen">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-espresso mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(o => (
                      <button
                        key={o.value}
                        onClick={() => { setFilter('category', o.value); setFilterOpen(false); }}
                        className={`font-sans text-xs px-4 py-2 border transition-colors ${
                          categoryParam === o.value
                            ? 'border-espresso bg-espresso text-cream'
                            : 'border-linen text-taupe hover:border-espresso'
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-espresso mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(o => (
                      <button
                        key={o.value}
                        onClick={() => { setFilter('price', o.value); setFilterOpen(false); }}
                        className={`font-sans text-xs px-4 py-2 border transition-colors ${
                          priceParam === o.value
                            ? 'border-espresso bg-espresso text-cream'
                            : 'border-linen text-taupe hover:border-espresso'
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-taupe font-light mb-4">No pieces found</p>
              <button
                onClick={() => setSearchParams({})}
                className="font-sans text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
