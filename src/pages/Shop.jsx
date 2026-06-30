import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function applyFilters(items, { category, price, sort }) {
  let result = [...items];

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (price && price !== 'all') {
    const [min, max] = price.split('-').map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  return result;
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`shop-hover-${product.img2Id}`}
            data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-[0.1em] uppercase px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-[0.1em] uppercase px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 text-ivory font-manrope text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={9} className={i <= Math.round(product.rating) ? 'fill-gold text-gold' : 'fill-linen text-linen'} />
          ))}
          <span className="font-manrope text-[10px] text-text-muted ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-cormorant text-base uppercase tracking-[0.1em] text-obsidian hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="font-manrope text-xs text-text-muted">
          {product.shortDescription}
        </p>
        <p className="font-manrope text-sm font-medium text-obsidian">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const category = searchParams.get('category') || 'all';
  const price = searchParams.get('price') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const filtered = applyFilters(products, { category, price, sort });

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, price, sort]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="font-manrope text-xs text-text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.12em] uppercase text-text-secondary hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setParam('category', cat.value)}
                className={`font-manrope text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
                  category === cat.value
                    ? 'border-obsidian bg-obsidian text-ivory'
                    : 'border-linen text-text-secondary hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setParam('sort', e.target.value)}
            className="font-manrope text-xs tracking-[0.1em] uppercase text-text-secondary bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-52 flex-shrink-0`}>
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">
                  Category
                </h3>
                <div className="space-y-2.5">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => setParam('category', cat.value)}
                      className={`block font-manrope text-xs transition-colors duration-200 ${
                        category === cat.value ? 'text-gold' : 'text-text-secondary hover:text-gold'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">
                  Price
                </h3>
                <div className="space-y-2.5">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setParam('price', range.value)}
                      className={`block font-manrope text-xs transition-colors duration-200 ${
                        price === range.value ? 'text-gold' : 'text-text-secondary hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {(category !== 'all' || price !== 'all') && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1.5 font-manrope text-xs text-text-muted hover:text-gold transition-colors"
                >
                  <X size={12} strokeWidth={1.5} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-text-secondary mb-3">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs tracking-[0.15em] uppercase text-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map(product => (
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
