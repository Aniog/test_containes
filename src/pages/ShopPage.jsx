import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
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

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
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
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-velvet font-manrope text-[9px] font-semibold tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          </div>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velvet/90 backdrop-blur-sm text-parchment font-manrope text-xs font-medium tracking-widest uppercase py-3.5 hover:bg-gold hover:text-velvet transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p className="font-cormorant text-sm font-medium tracking-widest uppercase text-ink group-hover:text-gold transition-colors duration-300 mb-1">
        {product.name}
      </p>
      <p className="font-manrope text-xs text-mist mb-2">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-cormorant text-xl font-medium text-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
          <span className="font-manrope text-xs text-mist">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    if (activeSort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (activeSort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activePrice, activeSort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePrice, activeSort]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter('category', cat.value)}
              className={`block w-full text-left font-manrope text-sm transition-colors duration-200 py-1 ${
                activeCategory === cat.value
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-stone/20" />

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block w-full text-left font-manrope text-sm transition-colors duration-200 py-1 ${
                activePrice === range.value
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-stone/20" />

      {/* Material */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver'].map(m => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 border border-stone/40 group-hover:border-gold transition-colors duration-200 flex items-center justify-center">
                {m === '18K Gold Plated' && <div className="w-2 h-2 bg-gold" />}
              </div>
              <span className="font-manrope text-sm text-mist group-hover:text-ink transition-colors duration-200">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-linen border-b border-stone/20 pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <p className="font-manrope text-xs font-medium tracking-widest uppercase text-gold mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.value === activeCategory)?.label}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone/20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-manrope text-xs font-medium tracking-widest uppercase text-mist hover:text-gold transition-colors duration-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="font-manrope text-xs text-mist">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={activeSort}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-stone/30 font-manrope text-xs text-ink px-4 py-2.5 pr-8 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-mist pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-ink mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-mist mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs font-medium tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-velvet transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-velvet/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-parchment z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <span className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-mist" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-velvet font-manrope text-xs font-semibold tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
