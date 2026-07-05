import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
  { value: '75-120', label: '$75 – $120' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-charcoal aspect-product mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-obsidian text-[8px] tracking-widest uppercase px-2 py-1 font-medium">
              Bestseller
            </span>
          </div>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-parchment text-[9px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-all duration-300 border-t border-mink/40"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-title-${product.id}`} className="text-[10px] tracking-widest uppercase text-parchment font-medium group-hover:text-gold transition-colors duration-300 mb-1">
        {product.name}
      </p>
      <p id={`shop-desc-${product.id}`} className="text-xs text-stone mb-2">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-parchment font-medium">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" className="text-gold" />
          <span className="text-[10px] text-stone">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const filteredProducts = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePriceRange) return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, activeSort]);

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian pt-20">
      {/* Page header */}
      <div className="bg-charcoal border-b border-mink/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Collection</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-parchment font-light">
            {activeCategory
              ? categoryOptions.find(c => c.value === activeCategory)?.label || 'All Jewelry'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-stone mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-parchment font-medium mb-4">Category</p>
                <ul className="space-y-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('category', opt.value)}
                        className={`text-xs transition-colors duration-300 ${
                          activeCategory === opt.value
                            ? 'text-gold'
                            : 'text-stone hover:text-parchment'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-mink/40" />

              {/* Price filter */}
              <div>
                <p className="text-[10px] tracking-widest uppercase text-parchment font-medium mb-4">Price</p>
                <ul className="space-y-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('price', opt.value)}
                        className={`text-xs transition-colors duration-300 ${
                          activePriceRange === opt.value
                            ? 'text-gold'
                            : 'text-stone hover:text-parchment'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-mink/40">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="lg:hidden flex items-center gap-2 text-[10px] tracking-widest uppercase text-parchment/70 hover:text-gold transition-colors duration-300"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
              </button>

              <span className="hidden lg:block text-xs text-stone">{filteredProducts.length} results</span>

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase text-stone hidden sm:block">Sort:</span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={e => setFilter('sort', e.target.value)}
                    className="appearance-none bg-charcoal border border-mink/60 text-parchment text-xs px-4 py-2 pr-8 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters panel */}
            {filterOpen && (
              <div className="lg:hidden mb-8 p-6 bg-charcoal border border-mink/40">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[10px] tracking-widest uppercase text-parchment font-medium">Filters</p>
                  <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-parchment">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-stone mb-3">Category</p>
                    <ul className="space-y-2">
                      {categoryOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setFilter('category', opt.value); setFilterOpen(false); }}
                            className={`text-xs ${activeCategory === opt.value ? 'text-gold' : 'text-parchment/70'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-stone mb-3">Price</p>
                    <ul className="space-y-2">
                      {priceRanges.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setFilter('price', opt.value); setFilterOpen(false); }}
                            className={`text-xs ${activePriceRange === opt.value ? 'text-gold' : 'text-parchment/70'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-parchment/40 font-light mb-4">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
