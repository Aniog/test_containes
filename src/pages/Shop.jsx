import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

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

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-velmora-cream aspect-portrait">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-ivory font-manrope text-[10px] uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-ivory font-manrope text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-cormorant text-base uppercase tracking-widest text-velmora-obsidian hover:text-velmora-gold transition-colors duration-200"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-linen'}`} />
            ))}
            <span className="font-manrope text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
          </div>
          <span className="font-cormorant text-xl text-velmora-obsidian">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';
  const sort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const filteredProducts = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const activeFiltersCount = [category, priceRange].filter(Boolean).length;

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'The Collection'}
          </h1>
          <p className="font-manrope text-sm text-velmora-muted mt-3">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-linen">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-6">
            {/* Category filter */}
            <div className="flex items-center gap-2">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle">Category:</span>
              <div className="flex gap-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('category', opt.value)}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      category === opt.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-linen text-velmora-muted hover:border-velmora-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="flex items-center gap-2">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle">Price:</span>
              <div className="flex gap-2">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('price', opt.value)}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      priceRange === opt.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-linen text-velmora-muted hover:border-velmora-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setFilter('sort', e.target.value)}
                className="appearance-none bg-transparent font-manrope text-xs uppercase tracking-widest text-velmora-muted border border-velmora-linen px-4 py-2 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-5 bg-velmora-cream border border-velmora-linen animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-velmora-muted" />
              </button>
            </div>
            <div className="mb-4">
              <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('category', opt.value)}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      category === opt.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-linen text-velmora-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('price', opt.value)}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      priceRange === opt.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                        : 'border-velmora-linen text-velmora-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-3xl text-velmora-muted mb-3">No pieces found</p>
            <p className="font-manrope text-sm text-velmora-subtle mb-6">Try adjusting your filters</p>
            <button
              onClick={() => setSearchParams({})}
              className="font-manrope text-xs uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-0.5"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
